const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  const post = await Post.create({ title, content, author: req.userId });
  res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "email");
  res.json(posts);
};

exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate("author", "email");
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, author: req.userId },
    req.body,
    { new: true }
  );
  if (!post) return res.status(403).json({ message: "Not allowed" });
  res.json(post);
};

exports.deletePost = async (req, res) => {
  const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.userId });
  if (!post) return res.status(403).json({ message: "Not allowed" });
  res.json({ message: "Post deleted" });
};
