import { Router } from "express";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import * as productControllers from "../controllers/products.js";
import { isValidId } from "../middlewares/isValidId.js";

const productsRouter = Router();

productsRouter.get("/", ctrlWrapper(productControllers.getProductsController));

productsRouter.get("/:productId", isValidId, ctrlWrapper(productControllers.getProductByIdController));

productsRouter.post("/", ctrlWrapper(productControllers.addProductController));

productsRouter.patch("/:productId", isValidId, ctrlWrapper(productControllers.patchProductController));

productsRouter.delete('/:productId', isValidId, ctrlWrapper(productControllers.deleteProductController));

export default productsRouter;
