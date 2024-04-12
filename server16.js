import express from "express";
import fs from "fs";
const app = express();
app.listen(8080);
app.use(express.json());

app.post("/create", (req, res) => {
  fs.writeFile("myfile.txt", req.body.content + "\n", (err) => {
    if (err) console.log(err);
    res.status(200).send("Updated");
  });
});

app.post("/append", (req, res) => {
  fs.appendFile("myfile.txt", req.body.content + "\n", (err) => {
    if (err) console.log(err);
    res.status(200).send("Updated");
  });
});

app.post("/read", (req, res) => {
  fs.readFile("myfile.txt", (err, data) => {
    if (err) res.status(400).send(err);
    res.status(200).send(data);
  });
});

app.post("/delete", (req, res) => {
    fs.unlink("myfile.txt", (err) => {
      if (err) console.log(err);
      res.status(200).send("Deleted");
    });
  });
  
  app.post("/rename", (req, res) => {
    fs.rename("myfile.txt", "myfile1.txt",    (err) => {
      if (err) console.log(err);
      res.status(200).send("Renamed");
    });
  });


  app.post("/copy", (req, res) => {
    fs.copyFile("myfile.txt", "myfile1.txt", fs.constants.COPYFILE_EXCL, (err) => {
      if (err) console.log(err);
      res.status(200).send("Copied");
    });
  });


  app.post("/create", (req, res) => {
  fs.writeFile("myfile.txt", req.body.content + "\n", (err) => {
    if (err) console.log(err);
    res.status(200).send("Updated");
  });
});


   