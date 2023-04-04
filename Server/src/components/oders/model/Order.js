const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    mainDishCart: [
      {
        productName:{
          type: 'string',
          required: true,
        },
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

    extraDishCart: [
      {
        productName:{
          type: 'string',
          required: true,
        },
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

    toppingsCart: [
      {
        productName:{
          type: 'string',
          required: true,
        },
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

    anotherCart: [
      {
        productName:{
          type: 'string',
          required: true,
        },
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
    paymentStatus: {
      type: String,
      enum: ["Đang chờ", "Đã thanh toán", "Chưa thanh toán"],
      default: "Đang chờ",
    },
    orderStatus: {
      type: String,
      enum: ["Chấp nhận", "Từ chối", "Đang chờ"],
      default: "Đang chờ",
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
    totalAmount: {
      type: Number,
      required: true,
    },
    moneyToPaid: {
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
