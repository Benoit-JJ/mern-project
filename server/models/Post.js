const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: String,
    picture: {
      name: String,
      desc: String,
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Post", postSchema);
