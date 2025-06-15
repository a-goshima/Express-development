import express from 'express';
import dotenv from 'dotenv';
import indexRoutes from './routes';
import logger from './middlewares/logger';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(logger);

// Routes
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
