const mongoose = require("mongoose");
const validator = require("validator");
const userschema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "User must have name"],
      minlength: 3,
      maxlength: 50,
    },
    number: {
      type: String,
      required: [true, "User must have number"],
      unique: [true, "number already in use"],
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v);
        },
        message: "Please enter a 10-digit number.",
      },
    },
    age: {
      type: Number,
      required: [true, "User must have age"],
      min: 16,
      max: 100,
    },

    email: {
      type: String,
      required: [true, "User must have email"],
      unique: [true, "email already in use"],
      validate: [validator.isEmail, "Please provide a valid email"],
    },

    password: {
      type: String,
      required: [true, "User must have password"],
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// userschema.virtual("bookings", {
//   ref: "bookings",
//   foreignField: "user",
//   localField: "_id",
// });
const User = mongoose.model("user", userschema);
module.exports = User;
