module.exports = (app) => {
    app.get('/formulario-noticia', (req, res) => {
        res.render('admin/form_add_noticia');
    });
};