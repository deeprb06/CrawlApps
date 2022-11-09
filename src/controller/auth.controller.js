import userModel from "../models/auth.model";
import message from '../message/api.message';
import jwt from 'jsonwebtoken';
import config from "../config";

const secretKey = config.JWT_SECRET;

export const createUser = async (req, res) => {
    const { full_name, email, password } = req.body;
    try {
        const exitsuser = await userModel.findOne({ email: email });
        if (exitsuser) {
            return res.status(message.BAD_REQUEST_CODE).send({ status: message.BAD_REQUEST_CODE, message: message.USER_EXITS, data: {} })
        }

        let newuser = new userModel({
            full_name: full_name,
            email: email,
            password: password
        })
        await newuser.save();
        return res.status(message.NEW_CREATED_CODE).send({ status: message.NEW_CREATED_CODE, message: message.NEW_USER_MESSAGE, data: newuser })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}

export const LogIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const exitsuser = await userModel.findOne({ email: email });
        if (!exitsuser) {
            return res.status(message.BAD_REQUEST_CODE).send({ status: message.BAD_REQUEST_CODE, message: message.USER_NOT_EXITS, data: {} })
        }
        // check for password
        let matchpassword = await exitsuser.comparePassword(password);
        if (!matchpassword) {
            return res.status(message.ERROR_CODE).send({ status: message.ERROR_CODE, message: message.PASSWORD_WROGN, data: {} })
        }

        const token = jwt.sign({
            _id: exitsuser._id,
            email: exitsuser.email,
        }, secretKey, {});

        let responce = {
            _id: exitsuser._id,
            email: exitsuser.email,
            token: token
        }
        return res.status(message.NEW_CREATED_CODE).send({ status: message.NEW_CREATED_CODE, message: message.NEW_USER_MESSAGE, data: responce })
    } catch (error) {
        console.log(error, '--errr')
        return res.status(message.INTERNAL_SERVER_ERROR_CODE).send({ status: message.INTERNAL_SERVER_ERROR_CODE, message: message.INTERNAL_SERVER_ERROR_MESSAGE, data: {} })
    }
}