import { Product } from "../db/schemas/Product.js";

export const getProducts = () => Product.find();

export const getProductById = id => Product.findById(id);

export const addContact = payload => Product.create(payload);

export const updateProduct = async ({_id, payload, options = {}}) => {
    const rawResult = await Product.findOneAndUpdate({_id}, payload, {...options, new: true, includeResultMetadata: true});
    if(!rawResult || !rawResult.value) return null;
    console.log(rawResult.value);
    return {
        data: rawResult.value,
        isNew: Boolean(rawResult?.lastErrorObject?.upserted)
    };
};