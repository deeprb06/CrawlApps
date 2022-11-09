import express from 'express';
import cors from 'cors';
import common_routes from './src/routes';
import config from './src/config';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(config.api.prefix, common_routes);
export default app;