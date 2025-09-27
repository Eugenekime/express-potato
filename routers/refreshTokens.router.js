import { Router } from 'express';
import { refresh } from '../controllers/refreshTokens.controller.js';

const refreshRouter = Router();

refreshRouter.post('/refresh', refresh);

export default refreshRouter;
