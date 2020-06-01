"use strict";
{
  //打つべき単語配列
  const words = [
    "apple",
    "pizza",
    "hamburger",
    "banana",
    "orange",
    "dog",
    "wine",
    "pasta",
    "egg",
    "sausage",
    "taco",
    "potato",
  ];

  //配列wordsの中からランダムに選ぶ
  //↓は打つべき単語
  let word = words[Math.floor(Math.random() * words.length)];

  //後で値を再代入していくのでletで宣言
  //↓は打つべき文字のインデックス
  let loc = 0;

  //正解の数を管理するための変数
  let score = 0;
  //不正解の数を管理するための変数
  let miss = 0;

  //タイマー処理（制限時間を管理）
  //初期化
  const timeLimit = 3 * 1000;

  //ゲーム開始時刻を保持するための変数
  let startTime;

  const target = document.getElementById("target");
  const scoreLabel = document.getElementById("score");
  const missLabel = document.getElementById("miss");
  const timerLabel = document.getElementById("timer");

  //targetにwordをセットする処理
  // target.textContent = word;

  //正解した文字の表示を変更する処理
  function updateTarget() {
    //_を格納していくための変数
    let placeholder = "";

    //locのインデックスの一個前までplaceholderに_を足していく
    for (let i = 0; i < loc; i++) {
      placeholder += "_";
    }

    //_と残りの文字を表示
    //残りの文字＝wordのインデックスがloc番目以降の文字を表示
    //部分文字列を取得できるsubstring()を使用
    //substring()の引数には表示したい文字列のスタート地点のインデックスを当てる
    target.textContent = placeholder + word.substring(loc);
  }

  //残り時間を計算
  function updateTimer() {
    //ゲームが始まった時刻に制限時間を足して、そこから現在の時刻を引けば算出できる
    const timeLeft = startTime + timeLimit - Date.now();

    //秒単位で小数点以下を２桁まで表示
    timerLabel.textContent = (timeLeft / 1000).toFixed(2);

    //カウントダウン処理
    const timeoutId = setTimeout(() => {
      updateTimer();
    }, 10);

    //制限時間が残り０秒になったらタイマーを止める処理
    if (timeLeft < 0) {
      //タイマーのalert()のokをクリックした後に数字が-になる不具合を修正
      timerLabel.textContent = "0.00";

      //setTimeout()をキャンセルするにはclearTimeout()の引数にsetTimeout()の返り値を入れれば良いので、その返り値を定数で受け取り、clearTimeoutの引数に入れる
      clearTimeout(timeoutId);

      //タイマーが0.00になる前にalert()が発動され0.01などでタイマーが止まる不具合を修正
      //アラートの処理を遅らせる
      setTimeout(() => {
        alert("Game Over");
      }, 100);
    }
  }

  target.addEventListener("click", () => {
    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  });

  //e.keyでタイプしたキーを取得
  window.addEventListener("keydown", (e) => {
    // console.log(e.key);
    //タイピングの正誤判定
    //もしタイプされた文字とwordのloc番目の文字が同じなら
    if (e.key === word[loc]) {
      //scoreを表示し、locの数字を１増やす
      // console.log("score");
      loc++;

      //キーを打っていてlocを更新した後に、もしlocが今打つべき単語の文字数と同じになったら次の単語にいく
      if (loc === word.length) {
        //次の単語をセット
        word = words[Math.floor(Math.random() * words.length)];
        loc = 0;
      }

      //正解した文字の表示を変更する処理
      updateTarget();

      score++;
      scoreLabel.textContent = score;
    } else {
      //間違っているならmissを表示
      // console.log("miss");
      miss++;
      missLabel.textContent = miss;
    }
  });
}
