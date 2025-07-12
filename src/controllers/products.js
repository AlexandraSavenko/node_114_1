import createHttpError from "http-errors";
import * as productServices from "../services/products.js";

export const getProductsController = async (req, res) => {
  const products = await productServices.getProducts();
  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};

export const getProductByIdController = async (req, res, next) => {
  const { productId } = req.params;
  const data = await productServices.getProductById(productId);
  res.json({
    status: 200,
    message: `Successfully found product with id: ${productId}`,
    data
  });
};

export const addProductController = async (req, res, next) => {
  const data = await productServices.addContact(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data
  });
};

export const patchProductController = async (req, res, next) => {
  const _id = req.params.productId;
 
  const result = await productServices.updateProduct({_id, payload: req.body});
  // if(!result){
  //   throw createHttpError(404, "Product not found");
  // };
  res.json({
    status: 200,
    message: "Successfully patched a product!",
    data: result.data
  });
};