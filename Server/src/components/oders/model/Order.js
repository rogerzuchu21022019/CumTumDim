const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const OrderSchema = new mongoose.Schema(
  {
    mainDishCart: [
      {
        productName: {
          type: String,
          required: true,
        },
        productId: {
          type: String,
          required: true,
        },
        productImageUrl: {
          type: String,
          require: true,
        },
        subCategory: {
          type: String,
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
        productName: {
          type: String,
          required: true,
        },
        productId: {
          type: String,
          required: true,
        },
        productImageUrl: {
          type: String,
          require: true,
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
        productName: {
          type: String,
          required: true,
        },
        productId: {
          type: String,
          required: true,
        },
        productImageUrl: {
          type: String,
          require: true,
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
        productName: {
          type: String,
          required: true,
        },
        productId: {
          type: String,
          required: true,
        },
        productImageUrl: {
          type: String,
          require: true,
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
      default: "Đã thanh toán",
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
    address: {
      type: [
        {
          addressID: {
            type: String,
            unique: true,
            default: uuidv4(),
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
