import path from "path";
import ProductModel from "../models/product-model.js";

export default class ProductController {
  getProducts(req, res) {
    // console.log(path.resolve());

    let products = ProductModel.get();
    res.render("products", { products: products });
  }

  getAddForm(req, res) {
    return res.render("new-product");
  }

  addNewProduct(req, res) {
    // Access data from form
    console.log(req.body);
    ProductModel.add(req.body);
    let products = ProductModel.get();
    // Send user back to products page

    return res.render("products", { products: products });
  }
}
