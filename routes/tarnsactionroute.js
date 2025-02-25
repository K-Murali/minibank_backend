const express = require("express");
const {
  depositMoney,
  withdrawMoney,
  getBalance,
  getTransactions,
} = require("../controllers/transactioncontrollers");
const router = express.Router();

router.route("/deposit/:user_id").post(depositMoney);
router.route("/withdraw/:user_id").post(withdrawMoney);
router.route("/:user_id").get(getTransactions);
router.route("/balance/:user_id").get(getBalance);

// router.route("/updateuser").patch(updateuser);
module.exports = router;
