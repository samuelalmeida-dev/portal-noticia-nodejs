const app = require('./config/server');

const rotaHome = require('./app/routes/home')(app);
const rotaNoticia = require('./app/routes/noticias')(app);
const rotaFormNoticia = require('./app/routes/form_add_noticia')(app);



app.listen(3000, () => {
    console.log("Servidor Express ..");
})