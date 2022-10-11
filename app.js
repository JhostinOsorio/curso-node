const express = require('express');
const path = require('path');
const hbs = require('hbs')
const { config } = require('dotenv')

config()
const app = express();
const port = process.env.PORT;
const params = { nombre: 'Jhostin Osorio', titulo: 'Curso de Node' }

app.set('view engine', 'hbs');
hbs.registerPartials(path.resolve('views/partials'))

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.render('home', params)
});

app.get('/generic', (req, res) => {
  res.render('generic', params)
});

app.get('/elements', (req, res) => {
  res.render('elements', params)
});

app.get('*', (req, res) => {
  res.render('404')
});

app.listen(port, () => {
  console.log(`Esta corriendo en el puerto ${port}`)
});