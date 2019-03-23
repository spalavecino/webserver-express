var express = require('express')
var app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname + '/public' ));
hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');

/*app.get('/', (req, res) =>{
//   res.send('Hola Mundo')
    let salida = {
        nombre: 'Sebastian',
        edad: 27,
        url: req.url
    }

    res.send(salida);
})*/

app.get('/', (req, res) =>{

    res.render('home', {
        nombre: 'sebastian palavecino'
        //anio: new Date().getFullYear()
    });
})

app.get('/about', (req, res) =>{

    res.render('about', {
        anio: new Date().getFullYear()
    });
})

app.listen(port, ()=> console.log(`Escuchando peticiones en el puerto ${3000}`));