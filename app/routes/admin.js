module.exports = (application) => {
    application.get('/formulario-noticia', (req, res) => {
        application.app.controllers.admin.formulario_noticia(application, req, res);
    });

    application.post('/noticia/salvar', (req, res) => {
        application.app.controllers.admin.noticia_salvar(application, req, res);
    });
};