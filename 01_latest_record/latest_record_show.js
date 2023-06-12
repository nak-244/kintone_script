(function() {
  'use strict';

  function removeDuplicateRecords() {
    var params = { app: kintone.app.getId(), query: '' };

    kintone.api(kintone.api.url('/k/v1/records', true), 'GET', params, function(response) {
      var records = response.records;
      var cIdToRecordMap = {};

      // c_idごとに最新のレコードを保持
      for (var i = 0; i < records.length; i++) {
        var record = records[i];
        var cId = record.c_id.value;

        if (!cIdToRecordMap[cId] || record.createdTime > cIdToRecordMap[cId].createdTime) {
          cIdToRecordMap[cId] = record;
        }
      }

      // 最新のレコード以外を削除
      var deleteIds = [];
      for (var i = 0; i < records.length; i++) {
        var record = records[i];

        if (record.$id.value !== cIdToRecordMap[record.c_id.value].$id.value) {
          deleteIds.push(record.$id.value);
        }
      }

      // 削除処理
      if (deleteIds.length > 0) {
        var deleteParams = { app: kintone.app.getId(), ids: deleteIds };
        kintone.api(kintone.api.url('/k/v1/records', true), 'DELETE', deleteParams, function() {
          console.log('重複する古いレコードを削除しました。');
        });
      }
    });
  }

  kintone.events.on('app.record.index.show', removeDuplicateRecords);
})();
