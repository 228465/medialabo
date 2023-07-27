//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let h2 = document.querySelector('h2#ex42');
let p = document.createElement('p');			
p.textContent = '写真表と都市の緯度経度のページです';
h2.insertAdjacentElement('afterend', p);
p.style.textEmphasis='sesame green';

// 練習4-3 写真表作成プログラム
let h3 = document.querySelector('div#phototable');
let img = document.createElement('img');
img.src = 'taro.png';
let p1 = document.createElement('p');
p1.insertAdjacentElement('beforeend',img);
h3.insertAdjacentElement('beforeend',p1);

let img2 = document.createElement('img');
img2.src = 'jiro.png';
let p2 = document.createElement('p');
p2.insertAdjacentElement('beforeend',img2);
h3.insertAdjacentElement('beforeend',p2);

let img3 = document.createElement('img');
img3.src = 'hanako.png';
let p3 = document.createElement('p');
p3.insertAdjacentElement('beforeend',img3);
h3.insertAdjacentElement('beforeend',p3);

// 練習4-4 箇条書き削除プログラム
let li = document.querySelectorAll('ul#location > li');
for(let li2 of li){
	li2.remove();
}


// 練習4-5 箇条書き追加プログラム
for(let i = 0; i < data.length;i++){
	let list = document.createElement('li');
	list.textContent =(`${data[i].name} ・・・ 緯度:${data[i].lat}, 経度:${data[i].lng}`);
	document.getElementById('location').appendChild(list); 
}
