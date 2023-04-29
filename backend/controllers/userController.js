const { User } = require("../models/User");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");

const generateToken = (userId) => {
  return Jwt.sign({ _id: userId }, process.env.JWT_SECRET_KEY);
};

const getUser = async (req, res) => {
  let user;

  try {
    user = await User.findById(req.params.id);
  } catch (error) {
    console.log(error.message);
  }

  if (!user) {
    return res.status(400).json({ message: "no user" });
  }
  return res.status(200).json({ data: user });
};

const getAllUsers = async (req, res) => {
  let users;

  try {
    users = await User.find({});
  } catch (error) {
    console.log(error);
  }

  if (!users) {
    return res.status(400).json({ message: "no users" });
  }
  return res.status(200).json({ data: users });
};

const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body);
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      return res.status(201).json({
        data: user,
      });
    } else {
      return res.status(400).json({ message: "data already exists" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (!user) {
      return res.status(400).json({ message: "User doesn't exists" });
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(400).json({ message: "password doesn't match" });
    }

    let token = generateToken(user._id);
    return res
      .status(200)
      .cookie("token", token, {
        expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        httpOnly: true,
      })
      .json({
        message: "logged In",
        data: {
          id: user._id,
          username: user.name,
          useremail: user.email,
          token,
        },
      });
  } catch (error) {
    console.log(error.message);
  }
};

const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
      .json({ data: "logged out" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const followUser = async (req, res) => {
  try {
    const userToFollow = await User.findById(req.params.id);
    const loggedInUser = await User.findById(req.user._id);

    if (!userToFollow) {
      return res.status(404).json({ message: "user not found" });
    }

    if (loggedInUser.following.includes(userToFollow._id)) {
      const loggedIndex = loggedInUser.likes.indexOf(userToFollow._id);
      loggedInUser.following.splice(loggedIndex, 1);
      const userFollowIndex = userToFollow.likes.indexOf(loggedInUser._id);
      userToFollow.following.splice(userFollowIndex, 1);

      await loggedInUser.save();
      await userToFollow.save();
      return res.status(200).json({ message: "user un-followed" });
    } else {
      loggedInUser.following.push(userToFollow._id);
      userToFollow.followers.push(loggedInUser._id);

      await loggedInUser.save();
      await userToFollow.save();
      return res.status(200).json({ message: "user followed" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = { getUser, getAllUsers, signUp, login, logout, followUser };
