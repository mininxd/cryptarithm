let env = require('dotenv').config();
let fs = require('fs');
let axios = require('axios');
let express = require('express');
let cors  = require('cors');

let app = express();
app.use(cors());
app.use('/src', express.static(__dirname + '/src'));
app.use(express.static('src'));


app.get('/', async (req, res) => {
    const homepage = fs.readFileSync(`${__dirname}/src/index.html`);
    res.type("text/html").send(homepage);
});

app.get('/v1', async (req, res) => {
  const kueri = req.query.q;
      let info = ({'info': 'pembagian pada query ubah jadi (÷), karena slash (/) pada url adalah direktori'})
      
  if (kueri) {
    try {
      let url = 'https://apixcps.shuttleapp.rs/api/cryptarithm';
      let query = kueri.replaceAll(" ","+").replaceAll('÷', "/") //karena query + pada url berubah jadi spasi, jadi di replace lagi jadi +
      let payload = {q: query} 
      const { data } = await axios.post(url, payload);
      res.json(data);
      
    } catch (e) {
      res.json(info)
    }
  } else {
    res.json({'error':'query required', ...info})
  }
})

let port = process.env.PORT || 3000;
app.listen(port, () => {
 console.log(`Server berjalan pada port ${port}`);
});
 
