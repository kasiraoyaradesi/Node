//file upload formidable
import express from "express";
import formidable from "formidable";
import fs from "fs";
const app = express();
app.listen(8080);
app.post("/", (req, res) => {
  const form = formidable({});
  form.parse(req, (err, fields, files) => {
    var oldpath = files.file[0].filepath;
    var newpath =
      "C:/Users/nairx/tmp/" + Date.now() + "-" + files.file[0].originalFilename;
    fs.rename(oldpath, newpath, function (err) {
      fs.unlink(oldpath);
    });
    res.status(200).json({ fields, files });
  });
});
