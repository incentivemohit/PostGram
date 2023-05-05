const mongoose = require("mongoose");

const conn = async () => {
  await mongoose
    .connect("mongodb://0.0.0.0:27017/postgram", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log("connected"))
    .catch((err) => console.log(err.message));
};

module.exports = conn();
