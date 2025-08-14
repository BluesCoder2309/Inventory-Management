import express, { urlencoded } from "express";
import ProductController from "./src/controllers/product-controller.js";
import path from "path";
import ejsLayouts from "express-ejs-layouts";

const server = express();

// Parse form data
server.use(urlencoded({ extended: true }));

// setup view engine settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));
server.use(ejsLayouts);

// Create an instance of the product controller
const productController = new ProductController();

server.get("/", productController.getProducts);

// Create a new path for users when adding form
server.get("/new", productController.getAddForm);

server.post("/", productController.addNewProduct);

server.use(express.static("src/views"));

server.listen(3100);
