import createHttpError from "http-errors";
import { isValidObjectId } from "mongoose";

export const isValidId = (req, res, next) => {
const {productId} = req.params;
if(!isValidObjectId(productId)){
    return next(createHttpError(404, `${productId} not valid id`));
};
next();
};