const router = require("express").Router();
const axios = require("axios");
const moment = require("moment");

router.post("/github", async (req, res) => {
  const body = req.body;
  const message = 
`
*${body.pusher.name}* Pushed *${body.head_commit.message}* at *${
body.ref.split("/")[body.ref.split("/").length - 1]
}*
  
Repo: *${body.repository.name}*
Branch: *${body.ref.split("/")[body.ref.split("/").length - 1]}*
URL: ${body.repository.url}`;
  const resp1 = await axios.post(
    `${process.env.WA_API}?phone=${process.env.RIO_PHONE}&text=${message}&apikey=${process.env.RIO_KEY}`
  );
  const resp2 = await axios.post(
    `https://api.callmebot.com/whatsapp.php?phone=+6289613577326&text=${message}&apikey=900829`
  );
  res.send("oke");
});

module.exports = router;
