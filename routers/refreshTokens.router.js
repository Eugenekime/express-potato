import { Router } from 'express';
import { refresh } from '../controllers/refreshTokens.controller';

const refreshRouter = Router();

refreshRouter.post('/refresh', refresh);

export default refreshRouter;
