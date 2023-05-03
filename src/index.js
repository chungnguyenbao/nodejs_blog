const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000
const path = require('path');
const router = require('./routers');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json());

// app.use(morgan('combined'));
app.engine('hbs', handlebars.engine({
  extname : '.hbs'
}));
app.set('view engine', 'hbs');
// app.set('views', '.resources/views');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log('PATH: ',path.join(__dirname, 'resources/views') );

//-------------------Routing--------- ------

router(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})