import app from "./app";
import config from './src/config'
import connectDB from "./src/helpers/db";

const startServer = async () => {
    connectDB();
    app.listen(config.port, () => console.log(`Backend server start on port ${config.port}`))
}

startServer();