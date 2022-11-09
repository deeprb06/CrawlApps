import jwt from 'jsonwebtoken';
import message from '../message/api.message';
import config from '../config';

const authCheck = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return res.status(message.UNTHORIZED_CODE).send({ status: message.UNTHORIZED_CODE, message: message.TOKEN_NOT_PROVIDED, data: {} })
    }
    jwt.verify(token, config.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(message.UNTHORIZED_CODE).send({ status: message.UNTHORIZED_CODE, message: message.TOKEN_UNTHORIZED, data: {} })
        }
        console.log(decoded, '---decoded');
        req.user = decoded;
        next();
    })
}

export default authCheck;