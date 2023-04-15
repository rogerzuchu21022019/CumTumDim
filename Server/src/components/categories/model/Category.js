const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      unique:true,
      required: true,
    },
    // type: {
    //   type: String,
    //   enum: [`Main Dishes`, `Extra Dishes`, `Toppings`, `Another`],
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(`Category`, CategorySchema);
