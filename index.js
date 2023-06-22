const express = require("express");
const bookRouter = require("./router/book");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./router/user");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/sm41_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB:");
  })
  .catch((error) => {
    console.error("MongoDB Connection error:", error);
  });

app.get("/", function (req, res) {
  res.send("Helljhgkudfhkjvbhjfuo");
});

app.use(bookRouter);
app.use(userRouter);

app.listen(5000, function () {
  console.log("server berjalan lancar ");
});
