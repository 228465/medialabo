// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する 
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('button#button');
b.addEventListener('click', hantei);

let tex = document.querySelector('input[name="guess"]');
let k = document.querySelector('span#kaisu');
let a = document.querySelector('span#answer');
let p = document.querySelector('p#result');

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let yoso = Math.floor(tex.value);
  kaisu += 1;
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
  k.textContent = kaisu;
  a.textContent = yoso;
  if (kaisu >= 4) {
    p.textContent = "答えは" + kotae + "でした. すでにゲームは終わっています";
    return;
  }
  
  if (yoso === kotae){
    p.textContent = "正解です. おめでとう!";
    kaisu = 4;
    return;
  }

  if(kaisu === 3){
    p.textContent = "まちがい. 残念でした答えは " + kotae + " です.";
    return;
  }

  if(yoso < kotae){
    p.textContent = "まちがい. 答えはもっと大きいですよ";
    return;
  }
  
  if(yoso > kotae){
    p.textContent = "まちがい. 答えはもっと小さいですよ";
    return;
  }
}