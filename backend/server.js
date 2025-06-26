// import
import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes  from './routes/productRoutes.js'
import uploadRoutes from './routes/uploadRoutes.js';

// config
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', uploadRoutes);
app.use("/api/products", productRoutes)

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = process.env.PORT;
const url = process.env.MONGODB_URL;
mongoose
  .connect(url)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server is running on port", PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
