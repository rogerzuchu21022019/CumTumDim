// User.js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    googleId: {
      type: String,
      unique: true,
    },
    phone: {
      type: String,
      // required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    imageUrl: {
      type: String,
    },
    accessToken: {
      type: String,
    },
    fcmToken: {
      type: String,
    },
    order: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
      ],
    },
    notifications: [
      {
        notificationUUID: {
          type: String,
        },
        title: {
          type: String,
        },
        messageToCustomer: {
          type: String,
        },
        messageToAdmin: {
          type: String,
        },
      },
    ],

    address: {
      street: {
        type: String,
      },
      houseNumber: {
        type: String,
      },
      district: {
        type: String,
      },
      ward: {
        type: String,
      },
      city: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
