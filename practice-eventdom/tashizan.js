n = document.querySelector('input[name="left"]')
m = document.querySelector('input[name="right"]')
ans = document.querySelector('span#answer');
b = document.querySelector('button#calc');
b.addEventListener('click', sum);
function sum() {
  ans.textContent = Math.floor(n.value) + Math.floor(m.value) 
}