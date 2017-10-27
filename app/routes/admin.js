module.exports = (app) => {
    app.get('/formulario-noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });

    app.post('/noticia/salvar', (req, res) => {
        let noticia = req.body;

        const connection = app.config.dbConnection();
        const noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.salvarNoticia(noticia, connection, (error, success) => {
           res.redirect('/noticias');
        });
    });
};