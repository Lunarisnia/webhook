const router = require("express").Router();
const axios = require("axios");
// const moment = require("moment");
const nodemailer = require("nodemailer");

router.get("/get", async (req, res) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASSWORD, // generated ethereal password
    },
  });
  let info = await transporter.sendMail({
    from: '"EmailDatang 👻" <tania.berrylatte@gmail.com>', // sender address
    to: "tania.berrylatte@gmail.com", // list of receivers
    subject: "IP PACKAGES ✔", // Subject line
    html: `<b>${req.query.ip}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send("ip.data");
});

module.exports = router;
