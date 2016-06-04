module.exports = function(app){
    var index = require('../controllers/index.server.controller');
    app.get('/', index.render);
    
    var contact = require('../controllers/contact.server.controller');
    app.post('/contacto',contact.sendMail);
};