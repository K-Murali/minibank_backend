const express = require("express");
const {
  depositMoney,
  withdrawMoney,
  getBalance,
  getTransactions,
} = require("../controllers/transactioncontrollers");
const router = express.Router();

router.route("/deposite").post(depositMoney);
router.route("/withdraw").post(withdrawMoney);
router.route("/:account_id").get(getTransactions);
router.route("/balance/:account_id").get(getBalance);

// router.route("/updateuser").patch(updateuser);
module.exports = router;
