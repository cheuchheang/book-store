import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoute);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("Connected to DB");
    app.listen(process.env.PORT, () => {
      console.log(`App listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
