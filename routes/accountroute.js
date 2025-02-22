const express = require("express");
const { createaccount } = require("../controllers/accountcontrollers");
const router = express.Router();

router.route("/").post(createaccount);

// router.route("/updateuser").patch(updateuser);
module.exports = router;
