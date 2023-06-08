(function () {
  'use strict';

  // 子アプリのレコードが追加された時のイベントをトリガーする
  kintone.events.on('app.record.create.submit', function (event) {
    var record = event.record;
    var appIdChild = '479'; // 子アプリのApp IDを指定
    var appIdParent = '481'; // 親アプリのApp IDを指定

    // 親アプリに転記するデータを作成
    var parentRecord = {};

    // フィールドが存在するかチェックしてから転記
    if (record['レコード番号']) {
      parentRecord['レコード番号'] = { value: record['レコード番号'].value };
    }
    if (record['企業ID']) {
      parentRecord['企業ID'] = { value: record['企業ID'].value };
    }
    if (record['会社名']) {
      parentRecord['会社名'] = { value: record['会社名'].value };
    }
    // 必要なフィールドを追加

    // 親アプリにレコードを追加
    kintone.api('/k/v1/record', 'POST', { app: appIdParent, record: parentRecord })
      .then(function () {
        console.log('親アプリへの転記が完了しました');
        return event;
      })
      .catch(function (error) {
        console.error('エラーが発生しました:', error);
      });
  });
})();
