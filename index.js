import express from "express";
import ProductController from "./src/controllers/product-controller.js";
import path from "path";
import ejsLayouts from "express-ejs-layouts"

const server = express();

// setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);

// Create an instance of the product controller
const productController = new ProductController();

server.get("/", productController.getProducts);

server.use(express.static("src/views"));

server.listen(3100);
