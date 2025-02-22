const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  balance: { type: Number, required: true, default: 0 },
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
