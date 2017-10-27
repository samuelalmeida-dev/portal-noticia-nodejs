module.exports = (app) => {
    app.get('/formulario-noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticia/salvar', (req, res) => {
        let noticia = req.body;

        const connection = app.config.dbConnection();
        const noticiasDAO = new app.app.models.NoticiasDAO(connection);
        
        noticiasDAO.salvarNoticia(noticia, (error, success) => {
           res.redirect('/noticias');
        });
    });
};