const productsRouter = require("./products.js");
const { Router } = require("express");
const router = Router();

router.use(productsRouter);

module.exports = router