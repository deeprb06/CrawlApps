import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

export default {

    /**
     * your favorite port
     */
    port: process.env.PORT || 8000,

    /**
     * database url
     */
    MONGO_HOST: process.env.MONGO_HOST || 'mongodb://localhost:27017/todo',

    /**
     * jwt secret
     */
    JWT_SECRET: process.env.JWT_SECRET || 'askfjoafo',

    /**
     * api prefix
     */
    api: {
        prefix: '/api'
    }
}