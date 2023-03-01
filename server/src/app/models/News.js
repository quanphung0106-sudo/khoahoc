const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
    },
    imgDesc: {
      type: String
    },
    content: {
      type: String,
      required: true,
    },
    cat: {
      type: String,
    },
    tag: {
      type: String,
    },
    rating: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.models.News || mongoose.model("News", NewsSchema);
