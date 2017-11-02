module.exports.index = function (application, req, res){

    const connection = application.config.dbConnection();
    const noticiasDao = new application.app.models.NoticiasDAO(connection);

    noticiasDao.getCincoUltimasNoticias((error, success) =>{
            console.log(success);
            res.render('home/index', {noticias: success});

    });
}