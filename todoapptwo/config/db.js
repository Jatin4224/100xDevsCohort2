const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose
    .connect(
      "mongodb+srv://jatin4224:MyrigWDrXvTCGMeB@cluster4224.cctoa.mongodb.net/todoapptwo"
    )
    .then(() => console.log("db connected"))
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  dbConnect,
};
