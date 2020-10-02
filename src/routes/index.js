const router = require("express").Router();
const axios = require("axios");
// const moment = require("moment");

router.get("/get", async (req, res) => {
  const ip = await axios.get("https://api.ipify.org/");
  res.send(ip.data);
});

module.exports = router;
