import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import GlobalErrorHandler from './middlewares/globalError';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

// Global Error handeler
app.use(GlobalErrorHandler);

export { app };
