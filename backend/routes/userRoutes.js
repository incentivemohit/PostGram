const express = require("express");
const router = express.Router();
const {
  getAllUsers,
  signUp,
  login,
  getUser,
  logout,
  followUser,
  notifications,
} = require("../controllers/userController");

const { isAuthenticated } = require("../middlewares/auth");
router.get("/users", getAllUsers);
router.post("/signup", signUp);
router.post("/signin", login);
router.get("/logout", logout);
router.route("/notifications").get(isAuthenticated, notifications);
router.route("/follow/:id").get(isAuthenticated, followUser);
router.get("/:id", getUser);

module.exports = router;
