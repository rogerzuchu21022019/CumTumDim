const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BannerSchema = new Schema(
  {
    imageUrl: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//Export the model
module.exports = mongoose.model("Banner", BannerSchema);
