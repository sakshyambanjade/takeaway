const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    catagoryName: { type: String },
    minimumDeliveryPrice: { type: Number },
    photo: { type: String },
  },
  { collection: "items" }
);
module.exports = mongoose.model("Items", itemSchema);