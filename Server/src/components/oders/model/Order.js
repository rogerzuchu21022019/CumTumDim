const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    totalAmount: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        amounts: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
      },
    ],
    // paymentStatus: {
    //   type: String,
    //   enum: ["pending", "paid", "failed"],
    //   required: true,
    // },
    orderStatus: {
      type: String,
      enum: ["accepted", "denied", "pending"],
      default: "pending",
    },
    totalMainDish: {
      type: Number,
      required: true,
    },
    totalExtraDish: {
      type: Number,
      required: true,
    },
    totalTopping: {
      type: Number,
      required: true,
    },
    totalAnother: {
      type: Number,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
