function greeting() {
  let aisatsu = "こんにちは、 " + i.value + "さん";
  p.textContent = aisatsu;
}
let i = document.querySelector('input[name=shimei]');
let p = document.querySelector('p#message');
let b = document.querySelector('button#print');
b.addEventListener('click', greeting);
