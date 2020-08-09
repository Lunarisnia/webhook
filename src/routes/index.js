const router = require("express").Router();
const axios = require("axios");
const moment = require("moment");

router.post("/github", async (req, res) => {
  const body = req.body;
  const message = 
`
*${moment(body.head_commit.timestamp).lang('id').format("MMMM Do YYYY, h:mm:ss a")}*
*${body.pusher.name}* Pushed *${body.head_commit.message}* at *${
body.ref.split("/")[body.ref.split("/").length - 1]
}*
  
Repo: *${body.repository.name}*
Branch: *${body.ref.split("/")[body.ref.split("/").length - 1]}*
URL: ${body.repository.url}`;
  const resp = await Promise.all([
    axios.post(
      `${process.env.WA_API}?phone=${process.env.RIO_PHONE}&text=${message}&apikey=${process.env.RIO_KEY}`
    ),
    axios.post(
      `${process.env.WA_API}?phone=${process.env.RUSLAN_PHONE}&text=${message}&apikey=${process.env.RUSLAN_KEY}`
    ),
  ]);
  res.send("okee");
});

module.exports = router;
