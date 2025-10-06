import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRouter from './routers/auth.router.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();
app.use(express.json());

app.use('/api/auth', authRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MONGO_URI is working'))
  .catch((err) => console.log('MONGO_URI is NOT working', err));

app.listen(PORT, () => {
  console.log(`connected, port: ${PORT}`);
});
