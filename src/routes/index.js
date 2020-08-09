const router = require("express").Router();

router.post("/github", (req, res) => {
  res.send("Oke");
});

module.exports = router;