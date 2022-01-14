const router = require("express").Router();
const verify = require("./verifyToken");
const Post = require("../models/Post");
const multer = require("multer");
const multerConfig = require("../middleware/multer-config");
const upload = multer({ dest: "uploads/" });

router.post("/addpost", multerConfig, async (req, res) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    picture: req.body.picture,
  });

  try {
    const savedPost = await post.save();
    res.send({ post: post });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
