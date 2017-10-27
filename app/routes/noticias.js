
module.exports = (app) => {
    
    app.get('/noticias', (req, res) => {

        const connection = app.config.dbConnection();
        const noticiasDAO = new app.app.models.NoticiasDAO(connection);
        
        noticiasDAO.getNoticias((error, success) => {
           res.render('noticias/noticias', {noticias: success})
        });

    });
};