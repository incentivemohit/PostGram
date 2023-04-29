const mongoose = require("mongoose");

const conn = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/askme", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected"))
    .catch((err) => console.log(err.message));
};

module.exports = conn();
