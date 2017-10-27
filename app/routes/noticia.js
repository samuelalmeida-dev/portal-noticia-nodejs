module.exports = (app) => {

    app.get('/noticia', (req, res) =>{

        const connection = app.config.dbConnection();
        const noticiasDAO = new app.app.models.NoticiasDAO(connection);

        noticiasDAO.getNoticia((error, success) => {
            res.render('noticias/noticia', {noticia: success})
        })
    });
}