(function() {
  'use strict';

  function onAfterInsert(event) {
    var record = event.record;
    var cId = record.c_id.value;

    var params = { app: event.appId, query: 'c_id = "' + cId + '"' };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params, function(response) {
      var records = response.records;
      var deleteIds = [];

      for (var i = 0; i < records.length; i++) {
        if (records[i].$id.value !== event.recordId) {
          deleteIds.push(records[i].$id.value);
        }
      }

      if (deleteIds.length > 0) {
        var deleteParams = { app: event.appId, ids: deleteIds };
        kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', deleteParams, function() {
          console.log('古いレコードを削除しました。');
        });
      }
    });
  }

  kintone.events.on('app.record.create.submit.success', onAfterInsert);
})();
