const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/users", require("./routes/userroute.js"));
app.use("/api/accounts", require("./routes/accountroute.js"));
app.use("/api/transactions", require("./routes/tarnsactionroute.js"));

// https://minibank-backend-2.vercel.app/

module.exports = app;
