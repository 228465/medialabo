
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log(data.name);
  console.log("天気: " + data.weather[0].description);
  console.log("最高気温: " + data.main.temp_max);
  console.log("最低気温: " + data.main.temp_min);
}

function print2(){
  let Select = document.querySelector('select#search');
  let idx = Select.selectedIndex;

  let os = Select.querySelectorAll('option');
  let o = os.item(idx);

  console.log('選択された ' + idx + ' 番目の option の情報:');
  console.log('  value=' + o.getAttribute('value'));  // id 属性を表示
  console.log('  textContent='+o.textContent);
}


// 課題5-1 の関数 printDom() はここに記述すること

function printDom(data) {


	
  let p1 = document.querySelector('td#name');
  p1.textContent = data.name;

  let p2 = document.querySelector('td#weather');
  p2.textContent = data.weather[0].description;

  let p3 = document.querySelector('td#max');
  p3.textContent = data.main.temp_max;

  let p4 = document.querySelector('td#min');
  p4.textContent = data.main.temp_min;
}


// 課題5-1 のイベントハンドラの定義
function show() {

}

// 課題5-1, 6-1 のイベントハンドラ登録処理は以下に記述

let b = document.querySelector('button#answer');
b.addEventListener('click', sendRequest);


// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest(n) {

  let value = n;
  
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+value+'.json';
    axios.get(url)
        .then(showResult)   
        .catch(showError)   
        .then(finish);

        idx = 0;

}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  // サーバから送られてきたデータを出力
  let data = resp.data;

  // data が文字列型なら，オブジェクトに変換する
  if (typeof data === 'string') {
      data = JSON.parse(data);
  }

  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}
