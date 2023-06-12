(function() {
  'use strict';

  function onAfterInsert(event) {
    var record = event.record;
    var cId = record.c_id.value;

    var params = { app: parentAppId, query: 'c_id = "' + cId + '"' };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params, function(response) {
      var records = response.records;
      var deleteIds = [];

      for (var i = 0; i < records.length; i++) {
        if (records[i].$id.value !== event.recordId) {
          deleteIds.push(records[i].$id.value);
        }
      }

      if (deleteIds.length > 0) {
        var deleteParams = { app: parentAppId, ids: deleteIds };
        kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', deleteParams, function() {
          console.log('古いレコードを削除しました。');
        });
      }
    });
  }

  var parentAppId = 483; // 親アプリのApp IDを指定

  kintone.events.on('app.record.create.submit', function(event) {
    var childRecord = event.record;

    var parentRecord = {
      app: parentAppId,
      record: {
        // 親アプリに追加するレコードのフィールド値を子アプリからコピー
        c_id: { value: childRecord.c_id.value },
        c_name: { value: childRecord.c_name.value },
        // 他のフィールドも同様にコピーする
      }
    };

    kintone.api(kintone.api.url('/k/v1/record', true), 'POST', parentRecord, function(resp) {
      // 親アプリへのレコード追加が成功した場合の処理
      console.log('Parent record added successfully:', resp);
      onAfterInsert(event); // 既存のレコードの削除処理を実行
    }, function(error) {
      // 親アプリへのレコード追加が失敗した場合の処理
      console.error('Failed to add parent record:', error);
    });
  });
})();
