import express from "express";
const app = express();
app.listen(8080);

app.use("/user", (req, res, next) => {
  req.msg = "Hello";
  next();
});

app.get("/user", (req, res) => {
  res.send(req.msg);
});
