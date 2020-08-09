const router = require("express").Router();
const axios = require("axios");

router.post("/github", async (req, res) => {
  const resp = await axios.post(
    `https://api.callmebot.com/whatsapp.php?phone=${process.env.RIO_PHONE}&text=itwork&apikey=${process.env.RIO_KEY}`
  );
  res.send("okeeeeeeeeeee");
});

module.exports = router;
