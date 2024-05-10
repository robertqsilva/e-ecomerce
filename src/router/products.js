const { Router } = require("express");
const router = Router();

const {indexPage} = require('../controllers/index')

router.get("/", indexPage);

router.get("*", (req, res) => {
  res.render("404")
});

module.exports = router;