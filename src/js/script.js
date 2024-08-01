var query = "AB+BC=EDD"
fetch(`v1?q=${query}`).then(res => {return res.json()})
 .then(data => {
// output.append(varMapping);


   let i = 2;
   for(i; i < data.length; i++) {
resultWord.innerHTML += `<div class="word"> ${data[i][0]}</div>`
   resultNum.innerHTML  += `<div class="number"> ${data[i][1]}</div>`
   }
//   output.append(JSON.stringify(data))

 }).catch(e => {
   output.append(JSON.stringify(e))
 })
 
 let varMapping = '{"A": 8, "B": 7, "C": 9, "D": 6, "E": 1}'
  let map = JSON.parse(varMapping);
 for (let key in map) {
  outout.append(key + map[key])
}
