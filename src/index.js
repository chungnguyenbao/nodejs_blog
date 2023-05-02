const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('combined'));
app.engine('hbs', handlebars.engine({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
// app.set('views', '.resources/views');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH: ',path.join(__dirname, 'resources/views') );

app.get('/', (req, res) => {
  // return res.send('Hello World!')
  res.render('home');
});
app.get('/news', (req, res) => {
  // return res.send('Hello World!')
  res.render('news');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})