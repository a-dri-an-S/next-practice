export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'fakeprofileemail859@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    })

    const mailData = {
        from: 'fakeprofileemail859@gmail.com',
        to: 'adriansalinas.tech@gmail.com',
        subject: `Message From ${req.body.name}`,
        text: "Name: " + req.body.name + req.body.message + " | Sent from: " + req.body.email,
        html: `<div>Name: ${req.body.name}<div/><div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
    }

    transporter.sendMail(mailData, (err, info) => err ? console.log(err) : console.log(info))

    res.status(200).end()
}