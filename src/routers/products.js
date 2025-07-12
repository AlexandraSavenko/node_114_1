import { Router } from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import * as productControllers from "../controllers/products.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(productControllers.getProductsController));

productsRouter.get("/:productId", ctrlWrapper(productControllers.getProductByIdController));

productsRouter.post("/", ctrlWrapper(productControllers.addProductController));

productsRouter.patch("/:productId", ctrlWrapper(productControllers.patchProductController));

// productsRouter.delete()

export default productsRouter;
