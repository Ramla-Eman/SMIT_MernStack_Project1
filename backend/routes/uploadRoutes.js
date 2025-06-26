import express from "express";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products",
    allowed_formats: ["jpg", "jpeg", "png"]
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("image"), (req, res) => {
  res.json({
    public_id: req.file.filename,
    url: req.file.path,
  });
});


export default router;
