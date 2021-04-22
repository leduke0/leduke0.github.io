function sendEmail(name, email, subject, phone, message) { 
    // Email.send({ 
    //   Host : "smtp.gmail.com", 
    //   Username : "duke91662@gmail.com", 
    //   Password : "Masterdk91662", 
    //   To : 'duke91662@gmail.com', 
    //   From : "duke91662@gmail.com", 
    //   Subject : `${name} sent you a message`, 
    //   Body : `Name: ${name} <br/> Email: ${email} <br/> Subject: ${subject} <br/> Phone: ${phone} <br/> Message: ${message}`, 
    // }) 
    //   .then(function (message) { 
    //     alert("mail sent successfully") 
    //   }); 
    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "username",
    //     Password : "password",
    //     To : 'them@website.com',
    //     From : "you@isp.com",
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );
    function sendEmail() {
        Email.send({
        SecureToken : "6ace50b7-3894-4e72-8b27-52e148b2a410",
        To : 'duke91662@gmail.com',
        From : "duke91662@gmail.com",
        Subject: "Sending Email using javascript with SMTPJS",
        Body: "If you are reading this, dont forget to applaud kaustubh72",
        Attachments: [{
        name: "File_Name_with_Extension",
        path: "Full Path of the file"
        }]
        })
        .then(function (message) {
        alert("Mail has been sent successfully")
        });
        }
  } 