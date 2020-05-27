//Importamos los paquetes que requerimos
const express = require('express');
const hbs = require('hbs');

//creamos la aplicacion
const app = express();

//Definimos el motor de plantillas
//No de vamos a emplear MVC (Vista vamos a utiisar HBS)
app.set('view engine', 'hbs');

//Vamos a generar los partials
hbs.registerPartials(__dirname + '/views/partials/');

//Generamos el sitio estatico
app.use(express.static(__dirname + '/public'));

//configurar mis rutas
app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Jorge Alberto Gonzalez Erives',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/pablo', (req, res)=>{
    res.render('pablo', {
        autor : 'Jorge Alberto Gonzalez Erives 4E',
        year : new Date().getFullYear(),
        title : 'Pablo picasso'
    });
});

app.get('/claude', (req, res)=>{
    res.render('claude', {
        autor : 'Jorge Alberto Gonzalez Erives 4E',
        year : new Date().getFullYear(),
        title : 'Claude Monet'
    });
});

app.get('/dali', (req, res)=>{
    res.render('dali', {
        autor : 'Jorge Alberto Gonzalez Erives 4E',
        year : new Date().getFullYear(),
        title : 'Salvador Dalí'
    });
});

app.get('/velaz', (req, res)=>{
    res.render('velaz', {
        autor : 'Jorge Alberto Gonzalez Erives 4E',
        year : new Date().getFullYear(),
        title : 'Diego Velazquez'
    });
});

app.get('/pierre', (req, res)=>{
    res.render('pierre', {
        autor : 'Jorge Alberto Gonzalez Erives 4E',
        year : new Date().getFullYear(),
        title : 'Pierre-Auguste Renoir'
    });
});

//Arrancamos el servisdor web
app.listen(3000, ()=>{
    console.log('Escuchando el puerto 3000');
});