function fetchCrypt(event) {
var q = event;
var query = q.replaceAll("/",'÷');
fetch(`v1?q=${query}`).then(res => {return res.json()})
 .then(data => {
 var num = data.var_mapping
 for(let word in num) {
  resultWord.innerHTML += `<div class="word"> ${word}</div>`
  resultNum.innerHTML  += `<div class="number"> ${num[word]}</div>`
  
  run.classList.remove('is-loading');
 }
 }).catch(e => {
   output.append(JSON.stringify(e))
  run.classList.remove('is-loading');
 })
}

run.addEventListener('click', function(e) {
  e.preventDefault();
  fetchCrypt(input.value);
  run.classList.add('is-loading')
})