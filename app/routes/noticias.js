const dbConnection = require('../../config/dbConnection');

module.exports = (app) => {
    
    app.get('/noticias', (req, res) => {

        const connection = dbConnection();

        connection.query('select * from noticias', (error, success) => {
            //res.send(success);
            res.render('noticias/noticias', {noticias: success});

        })

    });
};