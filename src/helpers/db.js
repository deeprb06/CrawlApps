import mongoose from "mongoose";
import config from "../config";

const connectDB = async () => {
    try {
        const mongo_host = config.MONGO_HOST;
        console.log(mongo_host, '----mongo_host');
        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        await mongoose.connect(mongo_host, options);
        console.log('Mongo is Connected');
        return mongoose.connection
    } catch (error) {
        console.log(error);
        console.log(error.message, '--errr');
        process.exit(1);
    }
}

export default connectDB;
