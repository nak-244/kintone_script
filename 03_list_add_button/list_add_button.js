(() => {
  'use strict';
  kintone.events.on('app.record.index.show', (event) => {
    if (document.getElementById('my_index_button') !== null) {
      return;
    }

    const myIndexButton = document.createElement('button');
    myIndexButton.id = 'my_index_button';
    myIndexButton.innerText = '更新';

    // ボタンクリック時の処理
    myIndexButton.onclick = () => {
      confirm('いま押しましたね？');
    };

    kintone.app.getHeaderMenuSpaceElement().appendChild(myIndexButton);
  });
})();
