const path = require("path");
const nodemailer = require("nodemailer");
const router = require("express").Router();
// const { readFile } = require("fs");
const projects = require("../projects.json")

router.get("/projects", (req, res) => {
    // readFile((path.join(__dirname, '../projects'))
    res.json(projects)
})

router.post('/send', (req, res) => {
    console.log(req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    var mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: `!! PROFILE MESSAGE - ${req.body.name}`,
        text: `
            Name: ${req.body.name}
            Email: ${req.body.email}
            
            ${req.body.message}
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.json(error)
        } else {
            console.log('Email sent: ' + info.response);
            res.json('Email sent: ' + info.response);
        }
    });
})

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
