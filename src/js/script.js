function fetchCrypt(event) {
var q = event;
var query = q.replaceAll("/",'÷')
.replaceAll(" ","");
fetch(`v1?q=${query}`).then(res => {return res.json()})
 .then(data => {
  if(data.error) {
  run.classList.remove('is-loading');
  result.classList.remove('is-skeleton');
  resultJson.style.display = "none"
  output.innerHTML = data.error

  exp.classList.remove('is-skeleton');
  } else {
 var num = data.var_mapping
 for(let word in num) {
  resultWord.innerHTML += `<div class="word"> ${word}</div>`
  resultNum.innerHTML  += `<div class="number"> ${num[word]}</div>`
  api.innerHTML = `https://cryptarithm.mininxd.my.id/v1/?q=${input.value}`
  
  textarea.innerHTML = JSON.stringify(data).replaceAll("{", '{\n').replaceAll(',',',\n').replaceAll("}","\n}")
  resultJson.classList.remove('is-skeleton');
  textarea.classList.remove('is-skeleton');
  
  expWord.innerHTML = data.expr_word;
  expNum.innerHTML = data.expr_num;
  exp.classList.remove('is-skeleton');
  exp.style.height = 'fit-content';
  
  run.classList.remove('is-loading');
  result.classList.remove('is-skeleton');
 }
  }
 }).catch(e => {
  run.classList.remove('is-loading');
  result.classList.remove('is-skeleton');
  resultJson.style.display = "none"
  exp.classList.remove('is-skeleton');
 })
}

run.addEventListener('click', function(e) {
  resultWord.innerHTML = ""
  resultNum.innerHTML = ""
  e.preventDefault();
  try {
  fetchCrypt(input.value);
  } catch(e) {
    console.log(e)
    textarea.innerHTML = e;
  }
  run.classList.add('is-loading')
  run.classList.add('is-loading')
  
  result.classList.add('is-skeleton')
  exp.classList.add('is-skeleton')
  resultJson.classList.add('is-skeleton')
  resultJson.style.display = "block"
  textarea.classList.add('is-skeleton')
  foot.style.display = "block"
  
  textarea.innerHTML = ""
  expNum.innerHTML = ""
  expWord.innerHTML = ""
  output.innerHTML = ""

})