import path from "path";
import ProductModel from "../models/product-model.js";

export default class ProductController {
  getProducts(req, res) {
    // console.log(path.resolve());

    let products = ProductModel.get();
    res.render("products", { product: products });
    // console.log(products);

    // return res.sendFile(
    //   path.join(path.resolve(), "src", "views", "products.html")
    // );
  }
}
