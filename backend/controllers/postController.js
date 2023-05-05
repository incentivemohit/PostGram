const { Post } = require("../models/Post");
const { User } = require("../models/User");

const newPost = async (req, res) => {
  const { caption } = req.body;

  try {
    const user = await User.findById(req.user._id);

    let post = await Post.create({
      caption,
      userId: req.user._id,
    });

    if (!post) {
      return res.status(400).json({ message: "something went wrong" });
    }

    user.posts.push(post._id);
    user.save();
    return res.status(200).json({ data: post, message: "post added" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  let allPosts;
  try {
    allPosts = await Post.find({}).populate("userId")
  } catch (error) {
    console.log(error.message);
  }

  if (!allPosts) {
    return res.status(400).json({ message: "no allPosts" });
  }
  return res.status(200).json({ data: allPosts });
};

const getPost = async (req, res) => {
  let post;

  try {
    post = await Post.findById({_id:req.params.id});
  } catch (error) {
    console.log(error.message);
  }

  if (!post) {
    return res.status(400).json({ message: "no post" });
  }
  return res.status(200).json({ data: post });
};

const updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      desc: req.body.desc,
    });

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }
    if (post.userId.toString() != req.user._id.toString()) {
      return res.status(401).json({ message: "unable to update the post" });
    }
    post.save();
    return res.status(200).json({ message: "updated post" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    if (post.userId.toString() != req.user._id.toString()) {
      return res.status(401).json({ message: "unauthorized" });
    }

    await post.deleteOne();

    const user = await User.findById(req.user._id);
    const index = user.posts.indexOf(req.params.id);
    user.posts.splice(index, 1);
    await user.save();
    return res.json({ message: "post deleted" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const likeAndDislike = async (req, res) => {

  try {
    const post = await Post.findById({_id:req.params.id});

    if (!post) {
      return res.status(400).json({ message: "post not found" });
    }

    if (post.likesAndDislike.includes(req.user._id)) {
      const index = post.likesAndDislike.indexOf(req.user._id);
      post.likesAndDislike.splice(index, 1);
      await post.save();
      return res.status(200).json({ message: "post unliked" });
    } else {
      post.likesAndDislike.push(req.user._id);
    await post.save(); 

    const user=await  User.findById({_id:post.userId})
    user.Notifications.push(req.user._id)
    await user.save()
      return res.status(200).json({ message: "post liked" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getFollowingPost = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    const posts = await Post.find({
      userId: {
        $in: user.following,
      },
    });

    return res.status(200).json({
      posts,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  newPost,
  getPost,
  getAllPosts,
  updatePost,
  deletePost,
  likeAndDislike,
  getFollowingPost,
};
