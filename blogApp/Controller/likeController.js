import { Post } from "../models/postModel.js";
import { Like } from "../models/likeModel.js";
//like a post

export const likePost = async (req, res) => {
  try {
    const { post, user } = req.body;
    const like = new Like({
      post,
      user,
    });
    const savedLike = await like.save();

    //update the post collection basis on this
    const udpatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes: savedLike._id } },
      { new: true }
    )
      .populate("likes") //this for all information
      .exec();

    res.json({
      post: udpatedPost,
    });
  } catch (error) {
    return res.status(400).json({
      error: "Error while Liking post",
    });
  }
};
