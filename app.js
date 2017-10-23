const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home/index');
});

app.get('/formulario-noticia', (req, res) => {
    res.render('admin/form_add_noticia');
});

app.get('/noticias', (req, res) => {
    res.render('noticias/noticias');
});

app.get('/tecnologia', (req, res) => {
    res.render("secao/tecnologia");
});

app.listen(3000, () => {
    console.log("Servidor Express ..");
})