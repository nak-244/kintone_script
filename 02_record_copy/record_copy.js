(function() {
  'use strict';

  kintone.events.on('app.record.create.submit', function(event) {
    var childRecord = event.record;
    var parentAppId = 483; // 親アプリのApp IDを指定

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
    }, function(error) {
      // 親アプリへのレコード追加が失敗した場合の処理
      console.error('Failed to add parent record:', error);
    });
  });

})();
