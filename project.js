let b = document.querySelector('#answer');
b.addEventListener('click', answer);

function answer(){
  hantei();
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/'+u+'.json';
    axios.get(url)
        .then(Result)   
        .catch(Error)   
        .then(finish);
}

function hantei(){
  let Select = document.getElementById('search');
  console.log(Select.value);
    u=Select.value;
}

function Result(resp) {
	let data = resp.data;
	if (typeof data === 'string') {
		data = JSON.parse(data);
	}
  let p1 = document.querySelector('td#name');
  p1.textContent = data.name;

  let p2 = document.querySelector('td#weather');
  p2.textContent = data.weather[0].description;

  let p3 = document.querySelector('td#max');
  p3.textContent = data.main.temp_max;

  let p4 = document.querySelector('td#min');
  p4.textContent = data.main.temp_min;
}

function Error(err) {
	let p1 = document.querySelector('td#name');
  p1.textContent = "EROOR";
}	

function finish() {
	console.log('Ajax 通信が終わりました');
}