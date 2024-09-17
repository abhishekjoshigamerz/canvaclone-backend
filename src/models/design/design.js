const mongoose = require("mongoose");

const designSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: Object,
      required: true,
    },
    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

const Design = mongoose.model("Design", designSchema);

module.exports = Design;
