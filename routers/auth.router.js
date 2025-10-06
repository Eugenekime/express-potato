import { Router } from 'express';
import registrationRouter from './registration.router.js';
import authLoginRouter from './authLogin.router.js';
import refreshRouter from './refreshTokens.router.js';
import deleteAccRouter from './deleteAcc.router.js';

const router = Router();

router.use('/register', registrationRouter);
router.use('/login', authLoginRouter);
router.use('/refresh', refreshRouter);
router.use('/deleteAcc', deleteAccRouter);

export default router;
