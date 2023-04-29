const Jwt = require("jsonwebtoken");
const { User } = require("../models/User");

const isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "login first",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = await User.findById(decoded._id);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.log(error.message);
  }
};

module.exports = { isAuthenticated };
