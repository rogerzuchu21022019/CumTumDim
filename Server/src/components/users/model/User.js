// User.js
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

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
    orders: {
      type: [],
    },
    notifications: {
      type: [
        {
          title: {
            type: String,
            required: true,
          },
          content: {
            type: String,
            required: true,
          },
          data: {
            type: {},
          },
        },
      ],
    },
    addresses: {
      type: [
        {
          name: {
            type: String,
            required: true,
          },
          phone: {
            type: String,
            required: true,
          },
          street: {
            type: String,
            required: true,
          },
          houseNumber: {
            type: String,
            required: true,
          },
          district: {
            type: String,
            required: true,
          },
          ward: {
            type: String,
            required: true,
          },
          city: {
            type: String,
            required: true,
          },
          addressDefault: {
            type: Boolean,
            default: false,
          },
        },
      ],
    },
    fcmTokenDevice: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
