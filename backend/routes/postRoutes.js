const express = require("express");
const router = express.Router();
const {
  newPost,
  getPost,
  getAllPosts,
  updatePost,
  deletePost,
  likeAndDislike,
  getFollowingPost,
} = require("../controllers/postController");
const { isAuthenticated } = require("../middlewares/auth");

router.route("/followpost").get(isAuthenticated, getFollowingPost);
router.route("/newpost").post(isAuthenticated, newPost);
router.get("/posts", getAllPosts);
router
  .route("/:id")
  .get(isAuthenticated, getPost)
  .put(isAuthenticated, updatePost)
  .delete(isAuthenticated, deletePost);

router.route("/liked/:id").get(isAuthenticated, likeAndDislike);

module.exports = router;
