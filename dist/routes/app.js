"use strict";
const express = require("express");
const router = express.Router();
const customer = require("./web/customer");
router.use("/web", customer);
module.exports = router;
