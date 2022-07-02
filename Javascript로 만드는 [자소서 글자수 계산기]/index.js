function counter() {
  let content = document.getElementById('jasoseol').value;
  document.getElementById('count').innerHTML = '(' + content.length + '/200)';
}
counter();