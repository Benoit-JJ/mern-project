const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    select: String,
    picture: String,
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", postSchema);
