import { Post } from "../models/postModel.js";

export const dummyLink = (req, res) => {
  res.send("Dummy Link");
};

export const createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    // console.log(req.body);

    const savedPost = await Post.create({ title, body });

    res.json({
      post: savedPost,
    });
  } catch (error) {
    // console.log(req.body);
    return res.status(400).json({
      error: `Error while creating post ${error}`,
    });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("likes")
      // .populate("comments")
      .exec();
    res.json({
      posts,
    });
  } catch (error) {
    return res.status(400).json({
      error: `Error while fetching post ${error}`,
    });
  }
};
