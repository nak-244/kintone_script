(function() {
  'use strict';

  // レコードの取得
  var getRecords = function() {
    return new Promise(function(resolve, reject) {
      var params = {
        app: 479,  // 対象のアプリのIDに置き換えてください
        query: '',
        fields: ['$id', '企業ID', 'レコード番号'],
        totalCount: true
      };

      kintone.api('/k/v1/records', 'GET', params, function(resp) {
        if (resp.records) {
          resolve(resp.records);
        } else {
          reject(resp.message);
        }
      });
    });
  };

  // レコードの削除
  var deleteRecord = function(recordId) {
    return new Promise(function(resolve, reject) {
      var params = {
        app: 479,  // 対象のアプリのIDに置き換えてください
        id: recordId
      };

      kintone.api('/k/v1/record', 'DELETE', params, function(resp) {
        if (resp.id) {
          resolve();
        } else {
          reject(resp.message);
        }
      });
    });
  };

  // メインの処理
  var main = function() {
    getRecords().then(function(records) {
      // 企業IDでソート
      records.sort(function(a, b) {
        return a.企業ID.value - b.企業ID.value;
      });

      var remainingRecords = [];

      for (var i = 0; i < records.length - 1; i++) {
        if (records[i].企業ID.value === records[i + 1].企業ID.value) {
          if (records[i].レコード番号.value > records[i + 1].レコード番号.value) {
            deleteRecord(records[i + 1].$id.value); // 次のレコードを削除
          } else {
            deleteRecord(records[i].$id.value); // 現在のレコードを削除
          }
        } else {
          remainingRecords.push(records[i]);
        }
      }

      // 最後のレコードは必ず残す
      remainingRecords.push(records[records.length - 1]);

      console.log('処理が完了しました。');
    }).catch(function(error) {
      console.error('エラーが発生しました:', error);
    });
  };

  main();
})();