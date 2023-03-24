const mongoose = require(`mongoose`);

const Schema = mongoose.Schema;

const DishSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: `Category`,
      required: true,
    },
    subCategory: {
      type: String,
      enum: [`Sườn`, `Sườn Mỡ`],
    },
    bestSeller: {
      type: Number,
    },
    imageUrl: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(`Dish`, DishSchema);
