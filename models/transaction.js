const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  account_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Account",
    required: true,
  },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["Deposit", "Withdraw"], required: true },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
