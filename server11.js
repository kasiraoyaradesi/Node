import express from "express";
const app = express();
app.listen(8080);
const userRouter = express.Router();
const postRouter = express.Router();
postRouter.get("/add", (req, res) => {
  res.send("add post");
});
userRouter.get("/add", (req, res) => {
  res.send("add user");
});
app.use("/users", userRouter);
app.use("/posts", postRouter);
