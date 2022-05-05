const express = require('express');
const router = express.Router();
var {ref_CTRL} = require("../controller");
router.get('/ref_input', (req, res) => {
  res.render('ref');
});
router.post("/", ref_CTRL);
module.exports = router;
