import express from "express";
import {
  createPost,
  dummyLink,
  getAllPosts,
} from "../Controller/postController.js";
import { likePost } from "../Controller/likeController.js";
import { createComment } from "../Controller/commentController.js";
const router = express.Router();

router.route("/d").get(dummyLink);
router.route("/create").post(createPost);
router.route("/getAll").get(getAllPosts);

router.route("/like").post(likePost);
router.route("/comment").post(createComment)

export { router };
