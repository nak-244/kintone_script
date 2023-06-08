(function () {
  'use strict';

  // レコードの取得
  var getRecords = function () {
    return new Promise(function (resolve, reject) {
      var params = {
        app: kintone.app.getId(), // 現在のアプリのIDを取得
        query: '',
        fields: ['$id', '企業ID', 'レコード番号'],
        totalCount: true,
      };

      kintone.api('/k/v1/records', 'GET', params, function (resp) {
        if (resp.records) {
          resolve(resp.records);
        } else {
          reject(resp.message);
        }
      });
    });
  };

  // レコードの削除
  var deleteRecord = function (recordId) {
    return new Promise(function (resolve, reject) {
      var params = {
        app: kintone.app.getId(), // 現在のアプリのIDを取得
        id: recordId,
      };

      kintone.api('/k/v1/record', 'DELETE', params, function (resp) {
        if (resp.id) {
          resolve();
        } else {
          reject(resp.message);
        }
      });
    });
  };

  // メインの処理
  var main = function () {
    getRecords()
      .then(function (records) {
        // 企業IDごとに最新のレコードを保持するオブジェクトを作成
        var latestRecords = {};

        records.forEach(function (record) {
          var companyId = record.企業ID.value;
          if (
            !latestRecords[companyId] ||
            record.レコード番号.value > latestRecords[companyId].レコード番号.value
          ) {
            latestRecords[companyId] = record;
          }
        });

        // 削除対象のレコードIDを取得
        var deleteRecordIds = records
          .filter(function (record) {
            var companyId = record.企業ID.value;
            return (
              latestRecords[companyId] &&
              record.$id.value !== latestRecords[companyId].$id.value
            );
          })
          .map(function (record) {
            return record.$id.value;
          });

        // レコードの削除
        var deletePromises = deleteRecordIds.map(function (recordId) {
          return deleteRecord(recordId);
        });

        return Promise.all(deletePromises);
      })
      .then(function () {
        console.log('処理が完了しました。');
      })
      .catch(function (error) {
        console.error('エラーが発生しました:', error);
      });
  };

  // 新しいレコードが追加または編集されたときに実行されるイベントハンドラを登録
  kintone.events.on(['app.record.create.submit', 'app.record.edit.submit'], function (event) {
    main(); // メインの処理を実行
    return event;
  });
})();
