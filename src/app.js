import express from 'express';
import cors from 'cors';
import  healthRoutes from './routes/health.routes.js';
import { loggerMiddleware } from './middlewares/logger.middleware.js';
import { errorMiddleware } from './middlewares/error.middleware.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);

app.use('/api/health', healthRoutes);

app.use(errorMiddleware);
export default app;