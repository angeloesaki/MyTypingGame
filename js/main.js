"use strict";
{
  //↓は打つべき単語
  const word = "apple";

  //後で値を再代入していくのでletで宣言
  //↓は打つべき文字のインデックス
  let loc = 0;

  //正解の数を管理するための変数
  let score = 0;
  //不正解の数を管理するための変数
  let miss = 0;

  const target = document.getElementById("target");
  const scoreLabel = document.getElementById("score");
  const missLabel = document.getElementById("miss");

  target.textContent = word;

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

  //e.keyでタイプしたキーを取得
  window.addEventListener("keydown", (e) => {
    // console.log(e.key);
    //タイピングの正誤判定
    //もしタイプされた文字とwordのloc番目の文字が同じなら
    if (e.key === word[loc]) {
      //scoreを表示し、locの数字を１増やす
      // console.log("score");
      loc++;
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
