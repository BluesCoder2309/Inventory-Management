import express, { urlencoded } from "express";
import ProductController from "./src/controllers/product-controller.js";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

const server = express();
// Create an instance of the product controller
const productController = new ProductController();

server.use(ejsLayouts);
server.use(express.json());
// Parse form data
server.use(urlencoded({ extended: true }));

// setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

server.get("/", productController.getProducts);
server.get("/add-product", productController.getAddProduct);

server.post("/", productController.postAddProduct);

server.use(express.static("src/views"));

server.listen(3100);
