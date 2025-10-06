import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import registrationRouter from './routers/registration.router.js';
import authLoginRouter from './routers/authLogin.router.js';
import refreshRouter from './routers/refreshTokens.router.js';
import deleteAccRouter from './routers/deleteAcc.router.js';

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
const app = express();
app.use(express.json());

app.use('/api/auth', registrationRouter);
app.use('/api/auth', authLoginRouter);
app.use('/api/auth', refreshRouter);
app.use('/api/auth', deleteAccRouter);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('MONGO_URI is working'))
  .catch((err) => console.log('MONGO_URI is NOT working', err));

app.listen(PORT, () => {
  console.log(`connected, port: ${PORT}`);
});
