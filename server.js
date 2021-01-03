const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');

//puerto
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



//
app.get('/', (req, res) => {
    res.render('home', { variable_nombre: 'fulaNito' });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => console.log(`Escuchando ${port}`));