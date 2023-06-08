(function() {

  var url = 'https://api.github.com/search/repositories?q=';
  var msgIndex, key, key1, keyb2, keyb3;
  var botui = new BotUI('search-repo');


  //初期メッセージ
  botui.message.bot({
    photo: true,
    delay: 300,
    content: "こんにちは！しごとらです。"
  })
  //初期メッセージ2
  botui.message.bot({
      photo: true,
      delay: 500,
      content: "あなたのおすすめの求人を探すために、いくつか質問をさせてね！"
    })
    .then(b1);;

  //じっくり
  function b1() {
    botui.message.bot({
      photo: true,
      delay: 800,
      content: "最初の質問です。"
    })
    botui.message.bot({
      photo: true,
      delay: 1600,
      content: "どのエリアで働きたいですか？"
    })
    botui.action.button({
        delay: 2000,
        action: [{
          text: "北海道・東北",
          value: "b111"
        }, {
          text: "関東",
          value: "b112"
        }, {
          text: "北陸・甲信越",
          value: "b113"
        }, {
          text: "東海・関西",
          value: "b114"
        }, {
          text: "中国・四国",
          value: "b115"
        }, {
          text: "九州・沖縄",
          value: "b116"
        }]
      })

      .then(function(res) {
        if (res.value == 'b111') {
          b111();
        }
        if (res.value == 'b112') {
          b112();
        }
        if (res.value == 'b113') {
          b113();
        }
        if (res.value == 'b114') {
          b114();
        }
        if (res.value == 'b115') {
          b115();
        }
        if (res.value == 'b116') {
          b116();
        }
        //  else {
        //   b116();
        // }
      });

  }
  //じっくり北海道・東北
  function b111() {
    botui.message.bot({
      photo: true,
      loading: true,
      delay: 1500, //メッセージの表示タイミングをずらす
      content: '都道府県を選んでください。'
    }).then(function() {

      //キーワードの入力
      //「return」を記述して、ユーザーからの入力待ち状態にする
      return botui.action.button({
        delay: 300,
        action: [{
          text: "北海道",
          value: "1"
        }, {
          text: "青森県",
          value: "2"
        }, {
          text: "岩手県",
          value: "3"
        }, {
          text: "宮城県",
          value: "4"
        }, {
          text: "秋田県",
          value: "5"
        }, {
          text: "山形県",
          value: "6"
        }, {
          text: "福島県",
          value: "7"
        }, {
          icon: 'undo',
          text: "1つ前へ戻る",
          value: "b1"
        }]
      });
    }).then(function(res) {

      if (res.value == 'b1') {
        b1();
      } else {
        b22();
      }
      //入力されたキーワードを取得する
      key = res.value;
      getRepositories(key);
    })
  }
  //じっくり関東
  function b112() {
    botui.message.bot({
      photo: true,
      loading: true,
      delay: 1500, //メッセージの表示タイミングをずらす
      content: '都道府県を選んでください。'
    }).then(function() {

      //キーワードの入力
      //「return」を記述して、ユーザーからの入力待ち状態にする
      return botui.action.button({
        delay: 300,
        action: [{
          text: "茨城県",
          value: "8"
        }, {
          text: "栃木県",
          value: "9"
        }, {
          text: "群馬県",
          value: "10"
        }, {
          text: "埼玉県",
          value: "11"
        }, {
          text: "千葉県",
          value: "12"
        }, {
          text: "東京都",
          value: "13"
        }, {
          text: "神奈川県",
          value: "14"
        }, {
          icon: 'undo',
          text: "1つ前へ戻る",
          value: "b1"
        }]
      });
    }).then(function(res) {

      if (res.value == 'b1') {
        b1();
      } else {
        b22();
      }
      //入力されたキーワードを取得する
      key = res.value;
      getRepositories(key);
    })
  }
  //じっくり北陸・甲信越
  function b113() {
    botui.message.bot({
      photo: true,
      loading: true,
      delay: 1500, //メッセージの表示タイミングをずらす
      content: '都道府県を選んでください。'
    }).then(function() {

      //キーワードの入力
      //「return」を記述して、ユーザーからの入力待ち状態にする
      return botui.action.button({
        delay: 300,
        action: [{
          text: "新潟県",
          value: "15"
        }, {
          text: "富山県",
          value: "16"
        }, {
          text: "石川県",
          value: "17"
        }, {
          text: "福井県",
          value: "18"
        }, {
          text: "山梨県",
          value: "19"
        }, {
          text: "長野県",
          value: "20"
        }, {
          icon: 'undo',
          text: "1つ前へ戻る",
          value: "b1"
        }]
      });
    }).then(function(res) {

      if (res.value == 'b1') {
        b1();
      } else {
        b22();
      }
      //入力されたキーワードを取得する
      key = res.value;
      getRepositories(key);
    })
  }
  //じっくり東海・関西
  function b114() {
    botui.message.bot({
      photo: true,
      loading: true,
      delay: 1500, //メッセージの表示タイミングをずらす
      content: '都道府県を選んでください。'
    }).then(function() {

      //キーワードの入力
      //「return」を記述して、ユーザーからの入力待ち状態にする
      return botui.action.button({
        delay: 300,
        action: [{
          text: "岐阜県",
          value: "21"
        }, {
          text: "静岡県",
          value: "22"
        }, {
          text: "愛知県",
          value: "23"
        }, {
          text: "三重県",
          value: "24"
        }, {
          text: "滋賀県",
          value: "25"
        }, {
          text: "京都府",
          value: "26"
        }, {
          text: "大阪府",
          value: "27"
        }, {
          text: "兵庫県",
          value: "28"
        }, {
          text: "奈良県",
          value: "29"
        }, {
          text: "和歌山県",
          value: "30"
        }, {
          icon: 'undo',
          text: "1つ前へ戻る",
          value: "b1"
        }]
      });
    }).then(function(res) {

      if (res.value == 'b1') {
        b1();
      } else {
        b22();
      }

      //入力されたキーワードを取得する
      key = res.value;
      getRepositories(key);
    })
  }
  //じっくり中国・四国
  function b115() {
    botui.message.bot({
      photo: true,
      loading: true,
      delay: 1500, //メッセージの表示タイミングをずらす
      content: '都道府県を選んでください。'
    }).then(function() {

      //キーワードの入力
      //「return」を記述して、ユーザーからの入力待ち状態にする
      return botui.action.button({
        delay: 300,
        action: [{
          text: "鳥取県",
          value: "31"
        }, {
          text: "島根県",
          value: "32"
        }, {
          text: "岡山県",
          value: "33"
        }, {
          text: "広島県",
          value: "34"
        }, {
          text: "山口県",
          value: "35"
        }, {
          text: "徳島県",
          value: "36"
        }, {
          text: "香川県",
          value: "37"
        }, {
          text: "愛媛県",
          value: "38"
        }, {
          text: "高知県",
          value: "39"
        }, {
          icon: 'undo',
          text: "1つ前へ戻る",
          value: "b1"
        }]
      });
    }).then(function(res) {

      if (res.value == 'b1') {
        b1();
      } else {
        b22();
      }

      //入力されたキーワードを取得する
      key = res.value;
      getRepositories(key);
    })
  }
  //じっくり九州・沖縄
  function b116() {
    botui.message.bot({
      photo: true,
      loading: true,
      delay: 1500, //メッセージの表示タイミングをずらす
      content: '都道府県を選んでください。'
    }).then(function() {

      //キーワードの入力
      //「return」を記述して、ユーザーからの入力待ち状態にする
      return botui.action.button({
        delay: 300,
        action: [{
          text: "福岡県",
          value: "40"
        }, {
          text: "佐賀県",
          value: "41"
        }, {
          text: "長崎県",
          value: "42"
        }, {
          text: "熊本県",
          value: "43"
        }, {
          text: "大分県",
          value: "44"
        }, {
          text: "宮崎県",
          value: "45"
        }, {
          text: "鹿児島県",
          value: "46"
        }, {
          text: "沖縄県",
          value: "47"
        }, {
          icon: 'undo',
          text: "1つ前へ戻る",
          value: "b1"
        }]
      });
    }).then(function(res) {

      if (res.value == 'b1') {
        b1();
      } else {
        b22();
      }

      //入力されたキーワードを取得する
      key = res.value;
      getRepositories(key);
    })
  }

  //じっくり職種選択
  function b22() {
    botui.message.bot({
      loading: true,
      photo: true,
      delay: 800,
      content: "次の質問です。"
    })
    botui.message.bot({
      photo: true,
      delay: 1300,
      content: "希望の職種を選んでください。"
    })
    botui.action.button({
        delay: 1800,
        action: [{
          text: "コールセンター",
          value: "1&srh_jobtype_child_param=4,5"
        }, {
          text: "オフィス事務",
          value: "1"
        }, {
          text: "営業",
          value: "2"
        }, {
          text: "IT・エンジニア",
          value: "3"
        }, {
          text: "WEB・クリエイター",
          value: "4"
        }, {
          text: "販売",
          value: "5"
        }, {
          text: "イベント",
          value: "6"
        }, {
          text: "接客・サービス",
          value: "7"
        }, {
          text: "飲食・フード",
          value: "8"
        }, {
          text: "軽作業",
          value: "9"
        }, {
          text: "製造",
          value: "10"
        }, {
          text: "配送・ドライバー",
          value: "11"
        }, {
          text: "農業・酪農",
          value: "15"
        }, {
          text: "医療・介護・福祉系",
          value: "12"
        }, {
          text: "漁業・水産",
          value: "16"
        }, {
          text: "講師・インストラクター",
          value: "13"
        }, {
          text: "美容・ヘルスケア・その他専門職",
          value: "14"
        }]
      })

      .then(function(res) {

        //入力されたキーワードを取得する
        key1 = res.value;
        getRepositories(key1);
      })

      .then(b33);
  }

  //じっくり雇用形態選択
  function b33() {
    botui.message.bot({
      loading: true,
      photo: true,
      delay: 800,
      content: "最後の質問です。"
    })
    botui.message.bot({
      photo: true,
      delay: 1300,
      content: "どんな働き方がいいですか？"
    })
    botui.action.button({
        delay: 1800,
        action: [{
          text: "派遣・アルバイト・紹介予定派遣",
          value: "1,2,6"
        }, {
          text: "正社員・契約社員・紹介",
          value: "3,4,5"
        }]
      })

      .then(function(res) {

        //入力されたキーワードを取得する
        keyb2 = res.value;
        getRepositories(keyb2);
      })

      .then(load);
  }

  //最後のローディング
  function load() {
    //ローディング中のアイコンを表示
    botui.message.bot({
        photo: true,
        loading: true,
      })
      .then(function(index) {

        //ローディングアイコンのindexを取得
        //このindexを使ってメッセージ情報を更新する
        //（更新しないとローディングアイコンが消えないため…）
        msgIndex = index;
      });
  }
  //GitHubのリポジトリを取得する処理
  function getRepositories(keyword) {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url + keyword);
    xhr.onload = function() {
      var result = JSON.parse(xhr.responseText);

      //取得したリポジトリ数をshowMessage()に代入する
      showMessage(result.total_count);
    }
    xhr.send();
  }
  //リポジトリ総数をメッセージに表示する処理
  function showMessage(totalCount) {

    //ローディングアイコンのindexを使ってメッセージを書き換える
    botui.message.update(msgIndex, {
      delay: 1000,
      content: "あなたにオススメのお仕事が見つかりました！"
    })
    botui.message.bot({
        photo: true,
        delay: 2000,
        loading: true,
        type: 'html', // this is 'text' by default
        content: '<a href="https://sigotora.jp/index.cfm?fuseaction=job.joblist&srh_ken_param=' + key + '&srh_jobtype_param=' + key1 + '&srh_shift_param=' + keyb2 + '" target="_blank">おすすめ求人</a>'
      })
      .then(z99);
  }

  function z99() {
    botui.message.bot({
      loading: true,
      photo: true,
      delay: 800,
      content: "もう一度やり直しますか？"
    })
    botui.action.button({
        delay: 1800,
        action: [{
          icon: 'circle-thin',
          text: 'はい',
          value: true
        }, {
          icon: 'close',
          text: 'いいえ',
          value: false
        }]
      })
      .then(function(res) {

        //「続ける」か「終了」するかの条件分岐処理
        res.value ? init() : end();
      });
  }

  //続ける
  function init() {
    botui.message.bot({
      type: 'html',
      content: '<input type="button" value="最初からやり直す" onclick="window.location.reload(true);" />'
    })
  }

  //終わる
  function end() {
    botui.message.bot({
      loading: true,
      photo: true,
      delay: 300,
      content: "ありがとうございました。下記からさらに詳しく検索することができますので、ご利用ください。"
    })
    botui.message.bot({
      photo: true,
      delay: 800,
      type: 'html',
      content: '<a href="https://sigotora.jp/index.cfm?fuseaction=job.srchform" target="_blank">日払い・未経験歓迎の求人情報</a>'
    })
  }

  //閉じタグ
})();
