function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "itoya.shem2017@gmail.com",
        Password: "95AA784DD14A5E435BAE90474DBC046A35AC",
        To: 'itoya.shem2017@gmail.com',
        From: document.getElementById("email").value,
        Subject: "From portfolio site",
        Body: "Email: " + document.getElementById("email").value
            + "<br> Name: " + document.getElementById("message").value
    }).then(
        message => alert("message sent succesfully")
    );
}