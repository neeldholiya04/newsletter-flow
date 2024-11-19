const express = require("express");
const { startFlow } = require("../controllers/flowController");

const router = express.Router();

router.get("/start", startFlow);

module.exports = router;
