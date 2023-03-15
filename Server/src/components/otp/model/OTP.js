const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const OtpSchema = new Schema(
  {
    otpNumber: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now(),
      index: {
        expires: "60",
      },
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Otp", OtpSchema);
