
module.exports = (app) => {
    
    app.get('/noticias', (req, res) => {

        const connection = app.config.dbConnection();
        const noticiasModel = app.app.models.noticiasModel;
        
        noticiasModel.getNoticias(connection, (error, success) => {
           res.render('noticias/noticias', {noticias: success})
        });

    });
};