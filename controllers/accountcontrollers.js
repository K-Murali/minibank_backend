const Account = require("../models/account");

exports.createaccount = async (req, res) => {
  try {
    const { user_id } = req.body;
    console.log(user_id);
    const existingAccount = await Account.findOne({ user_id });
    if (existingAccount) {
      return res.status(400).json({ message: "User already has an account" });
    }
    const newAccount = new Account({ user_id, balance: 0 });
    await newAccount.save();
    res
      .status(201)
      .json({ message: "Account created successfully", account: newAccount });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
