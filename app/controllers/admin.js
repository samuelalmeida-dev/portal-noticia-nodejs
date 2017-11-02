module.exports.formulario_noticia = function (app, req, res){
    res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});
};

module.exports.noticia_salvar = function(application, req, res){
    let noticia = req.body;
    
            req.assert('titulo', 'Título é obrigatório').notEmpty();
            req.assert('resumo', "Resumo é obrigatório").notEmpty();
            req.assert('resumo', 'Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
            req.assert('autor','Autor é obrigatório').notEmpty();
            req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
            req.assert('noticia', 'Notícia é obrigatório').notEmpty();
    
            let errors = req.validationErrors();
    
            if(errors){
                res.render("admin/form_add_noticia", {validacao: errors, noticia: noticia});
                return null;
            }
    
            const connection = application.config.dbConnection();
            const noticiasDAO = new application.app.models.NoticiasDAO(connection);
            console.log('teste');
            
            noticiasDAO.salvarNoticia(noticia, (error, success) => {
               res.redirect('/noticias');
            });
}