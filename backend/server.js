const express = require("express");
const app = express();
require("./db/config");
const dotenv = require("dotenv");
dotenv.config();
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const PORT = process.env.PORT || 9000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/user/", userRouter);
app.use("/api/v1/post", postRouter);

app.listen(PORT, (err) => {
  if (!err) console.log("Server is running");
});
