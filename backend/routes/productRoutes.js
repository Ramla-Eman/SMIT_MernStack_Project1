import express from "express";
import Product from "../models/Product.js";

const routes = express.Router();

// Get all products
routes.get("/", async (req, res) => {
  // const { page = 1, limit = 8 } = req.query;

  // const options = {
  //   page: parseInt(page),
  //   limit: parseInt(limit),
  // };

  // const products = await Product.paginate({}, options);
  const products = await Product.find();
  res.json(products);

  // res.render("/products",{
  //   totalDocs: products.totalDocs,
  //   limit: products.limit,
  //   totalPages: products.totalPages,
  //   currentPage: products.page,
  //   counter: products.pagingCounter,
  //   hasPrevPage: products.hasPrevPage,
  //   hasNextPage: products.hasNextPage,
  //   prevPage: products.prevPage,
  //   nextPage: products.nextPage,
  //   contacts: products.docs,
  // });
});

// Get one product
routes.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// Add product
routes.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  const saved = await newProduct.save();
  res.status(201).json(saved);
});

// Update product
routes.put("/:id", async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(updated);
});

// Delete product
routes.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: "Product deleted" });
});

const productRoutes = routes;
export default productRoutes;
