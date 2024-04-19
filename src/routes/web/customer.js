const express = require("express");
const router = express.Router();

const controller = require("../../src/controller/web/customer");

router.get("/getListCustomer", controller.getAdd);

module.exports = router;
