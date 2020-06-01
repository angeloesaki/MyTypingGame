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

  //e.keyでタイプしたキーを取得
  window.addEventListener("keydown", (e) => {
    // console.log(e.key);
    //タイピングの正誤判定
    //もしタイプされた文字とwordのloc番目の文字が同じなら
    if (e.key === word[loc]) {
      //scoreを表示し、locの数字を１増やす
      // console.log("score");
      loc++;
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
