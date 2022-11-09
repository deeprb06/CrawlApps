import mongoose from 'mongoose';
import message from '../message/api.message';
import productModel from '../models/product.model';

const ObjectId = mongoose.Types.ObjectId;

export const createProduct = async (req, res) => {
    const { product_name, description, category, product_image } = req.body;
    const id = req.params.id;
    try {
        const exitsproduct = await productModel.findOne({ product_name: product_name });
        if (exitsproduct) {
            return res.status(message.BAD_REQUEST_CODE).send({ status: message.BAD_REQUEST_CODE, message: message.PRODUCT_EXITS, data: {} })
        }

        let newproduct = new productModel({
            product_name: product_name,
            description: description,
            category: ObjectId(category),
            product_image: product_image
        })
        return res.status(message.NEW_CREATED_CODE).send({ status: message.NEW_CREATED_CODE, message: message.NEW_PRODUCT_MESSAGE, data: newproduct })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const updateProduct = async (req, res) => {
    const id = req.params.id;
    const { _id } = req.user;
    const filename = req.file.filename;
    console.log(filename)
    try {
        const exitsproduct = await productModel.findOne({ _id: id });
        if (!exitsproduct) {
            return res.status(message.BAD_REQUEST_CODE).send({ status: message.BAD_REQUEST_CODE, message: message.PRODUCT_NOT_EXITS, data: {} })
        }

        let updateproduct = await productModel.updateOne({ _id: id }, { $set: { product_name: product_name, description: description, category: ObjectId(category), product_image: filename } }, { new: true });
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.PRODUCT_UPDATE, data: updateproduct })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const getSingleProduct = async (req, res) => {
    const id = req.params.id;
    try {

        let getsingleproduct = await productModel.findById({ _id: id });
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.PRODUCT_SINGLE, data: getsingleproduct })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const getAllProduct = async (req, res) => {
    const id = req.params.id;
    try {

        let getallproduct = await productModel.find();
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.PRODUCT_ALL, data: getallproduct })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {

        const data = await productModel.deleteOne({ _id: id });
        console.log(data)
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.PRODUCT_DELETE, data: {} })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

