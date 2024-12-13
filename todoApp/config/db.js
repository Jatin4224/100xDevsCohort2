// const mongoose = require("mongoose");
// const connectDb = () => {
//   mongoose
//     .connect(
//       "mongodb+srv://jatin4224:MyrigWDrXvTCGMeB@cluster4224.cctoa.mongodb.net/todoapp"
//     )
//     .then("connection success")
//     .catch((err) => console.log(err));
// };

// module.exports = {
//   connectDb,
// };
const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(
      "mongodb+srv://jatin4224:MyrigWDrXvTCGMeB@cluster4224.cctoa.mongodb.net/todoapp"
    )
    .then(() => console.log("Database connection successful"))
    .catch((err) => console.error("Database connection error:", err));
};

module.exports = {
  connectDb,
};
