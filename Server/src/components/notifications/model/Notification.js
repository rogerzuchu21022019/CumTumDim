const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    messageToCustomer: {
      type: String,
      required: true,
      unique: true,
    },
    messageToAdmin: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    time: {
      type: Date,
      default: Date.now(),
      index: {
        // expires = 2 hours
        expires: "7200",
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Notification", NotificationSchema);
