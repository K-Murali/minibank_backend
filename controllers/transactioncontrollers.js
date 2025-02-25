const Account = require("../models/account");
const Transaction = require("../models/transaction");

exports.depositMoney = async (req, res) => {
  try {
    const { amount, type } = req.body;

    if (type != "deposit") {
      return res.status(400).json({ message: "Invalid transaction type" });
    }
    const { user_id } = req.params;
    let account = await Account.findOne({ user_id });
    if (!account) return res.status(404).json({ message: "Account not found" });
    account.balance += amount * 1;
    await account.save();

    const transaction = new Transaction({
      account_id: account._id,
      amount,
      type: "Deposit",
    });
    await transaction.save();

    res
      .status(200)
      .json({ message: "Deposit successful", balance: account.balance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.withdrawMoney = async (req, res) => {
  try {
    const { amount, type } = req.body;
    const { user_id } = req.params;
    if (type == "deposite") {
      return res.status(400).json({ message: "Invalid transaction type" });
    }

    let account = await Account.findOne({ user_id });
    if (!account) return res.status(404).json({ message: "Account not found" });

    if (account.balance < amount)
      return res.status(400).json({ message: "Insufficient balance" });

    account.balance -= amount;
    await account.save();

    const transaction = new Transaction({
      account_id: account._id,
      amount,
      type: "Withdraw",
    });
    await transaction.save();

    res
      .status(200)
      .json({ message: "Withdrawal successful", balance: account.balance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getBalance = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log("user" + user_id);
    let acc = await Account.findOne({ user_id });
    if (!acc) return res.status(200).json({ message: "Account not found" });

    res.status(200).json({ balance: acc.balance });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    const { user_id } = req.params;

    // Find the user's account
    let acc = await Account.findOne({ user_id });
    if (!acc) return res.status(200).json({ message: "Account not found" });

    // Fetch transactions linked to the account
    let transactions = await Transaction.find({ account_id: acc._id });

    if (!transactions.length)
      return res.status(200).json({ message: "No transactions found" });

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
