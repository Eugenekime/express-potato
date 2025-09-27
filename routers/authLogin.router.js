import { Router } from 'express';
import { authLogin } from '../controllers/login.controller.js';

const authLoginRouter = Router();

authLoginRouter.post('/sign-in', authLogin);

export default authLoginRouter;
