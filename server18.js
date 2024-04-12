import express from "express";
import multer from "multer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

app.listen(8081, () => {
  console.log("Server Started on port 8080");
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    // cb(null, Date.now().toString());
    const filename = Date.now() + "-" + file.originalname;
    req.filename = "http://localhost:8081/uploads/"+filename;
    cb(null, filename);
    // cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.post("/", upload.single("file"), (req, res) => {
  // Access the uploaded file using req.file
  // Process the file and send a response
  res.status(200).json({ filePath: req.filename });
});
