
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport('smtps://corporativonaufal%40gmail.com:naufalavaluos1984@smtp.gmail.com');
 
/**inputName
 * inputEmail
 * inputSubject
 * inputMessage
 * Send an email when the contact from is submitted
 */
exports.sendMail = function(req, res) {
    var data = req.body

var mailOptions = {
        from: data.inputName,
        to: 'digma89@hotmail.com',
        subject: 'Mensaje de ' + data.inputName +' Asunto: ' +data.inputSubject,
        text:'Mensaje de ' + data.inputName +'\n Asunto: ' +data.inputSubject + '\n Email: ' +data.inputEmail +'\n Mensaje: ' +data.inputMessage
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});
 
 res.json(data);

};