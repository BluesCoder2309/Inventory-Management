import path from "path";
import ProductModel from "../models/product-model.js";

export default class ProductController {
  getProducts(req, res) {
    // console.log(path.resolve());

    let products = ProductModel.get();
    res.render("products", { products: products });
    // console.log(products);

    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }

  getAddForm(req, res) {
    return res.render("new-product");
  }

  addNewProduct(req, res) {
    // Access data from form
    console.log(req.body);
    let products = ProductModel.get();
    // Send user back to products page
    res.render("products", { products: products });
  }
}
