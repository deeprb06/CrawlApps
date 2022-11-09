import message from '../message/api.message';
import categoryModel from '../models/category.model';


export const createCategory = async (req, res) => {
    const { category_name } = req.body;

    try {
        const exitscategory = await categoryModel.findOne({ category_name: category_name });
        if (exitscategory) {
            return res.status(message.BAD_REQUEST_CODE).send({ status: message.BAD_REQUEST_CODE, message: message.CATEGORY_EXITS, data: {} })
        }

        let newcategory = await categoryModel.create(req.body);
        return res.status(message.NEW_CREATED_CODE).send({ status: message.NEW_CREATED_CODE, message: message.NEW_CATEGORY_MESSAGE, data: newcategory })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const updateCategory = async (req, res) => {
    const id = req.params.id;
    try {
        const exitscategory = await categoryModel.findOne({ _id: id });
        if (!exitscategory) {
            return res.status(message.BAD_REQUEST_CODE).send({ status: message.BAD_REQUEST_CODE, message: message.CATEGORY_NOT_EXITS, data: {} })
        }

        let updatecategory = await categoryModel.updateOne({ _id: id }, { $set: req.body }, { new: true });
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.SUCCESS_MESSAGE, data: updatecategory })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const getSingleCategory = async (req, res) => {
    const id = req.params.id;
    try {

        let getsinglecategory = await categoryModel.findById({ _id: id });
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.CATEGORY_SINGLE, data: getsinglecategory })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const getAllCategory = async (req, res) => {
    const id = req.params.id;
    try {

        let getallcategory = await categoryModel.find();
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.CATEGORY_ALL, data: getallcategory })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const deleteCategory = async (req, res) => {
    const id = req.params.id;
    try {

        await categoryModel.deleteOne({ _id: id });
        return res.status(message.SUCCESS).send({ status: message.SUCCESS, message: message.CATEGORY_DELETE, data: {} })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

