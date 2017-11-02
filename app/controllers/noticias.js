module.exports.noticia = function (application, req, res){
    const connection = application.config.dbConnection();
    const noticiasDAO = new application.app.models.NoticiasDAO(connection);
    
    let id_noticia = req.query;

    noticiasDAO.getNoticia(id_noticia, (error, success) => {
        if(id_noticia.id_noticia == undefined){
            res.redirect('/');
        }else{
            res.render('noticias/noticia', {noticia: success})
        }
   })
}

module.exports.noticias = function(application, req, res){
    
    const connection = application.config.dbConnection();
    const noticiasDAO = new application.app.models.NoticiasDAO(connection);
    
    noticiasDAO.getNoticias((error, success) => {
       res.render('noticias/noticias', {noticias: success})
    });
}