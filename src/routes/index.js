const router = require("express").Router();
const axios = require("axios");
const moment = require("moment");

router.get("/get", async (req, res) => {
  res.send(req.ip);
});

module.exports = router;
