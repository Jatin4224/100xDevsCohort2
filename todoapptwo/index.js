// const express = require("express");
// const { dbConnect } = require("./config/db");
// const createRouter = require("./routes/createtodo");
// const app = express();
// require("dotenv").config();
// app.use(express.json());
// dbConnect();

// app.use("/api/v1/createtodo", createRouter);
// app.listen(process.env.PORT, () => {
//   console.log("server running fine");
// });
const express = require("express");
const { dbConnect } = require("./config/db");
const createRouter = require("./routes/createtodo");
require("dotenv").config();

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to the database
dbConnect();

// Route for creating todos
app.use("/api/v1/createtodo", createRouter);

// Start the server
const PORT = process.env.PORT; // Default to port 3000 if PORT is not defined
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
