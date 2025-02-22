const express = require("express");
const {
  signup,
  login,
  protect
} = require("../controllers/usercontrollers");
const router = express.Router();

router.route("/signup").post(signup);
router.route("/login").post(login);

// router.route("/updateuser").patch(updateuser);
module.exports = router;
