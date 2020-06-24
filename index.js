const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
//import routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

dotenv.config();
app.use(bodyparser.json());

//connect to mongo
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to mongoDB!!");
  }
);

//middleware
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);
app.use(express.json());

app.listen(3000, () => {
  console.log("Server started");
});

//connection
//mongodb+srv://tanvi:tanvi123@cluster0-wsvqb.mongodb.net/Auth?retryWrites=true&w=majority
