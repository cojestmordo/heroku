var nodemailer = require('nodemailer');

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'phptesting752@gmail.com',
    pass: '123elo321'
  }
});

var mailOptions = {
  from: 'phptesting752@gmail.com',
  to: 'lordmada2012@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 