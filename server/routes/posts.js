const router = require("express").Router();
const verify = require("./verifyToken");
const Post = require("../models/Post");
const path = require("path");

// MULTER
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

router.post("/addpost", upload.single("picture"), async (req, res) => {
  console.log(req.files);
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    select: req.query.select,
  });

  try {
    const savedPost = await post.save();
    res.send({ post: post });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
