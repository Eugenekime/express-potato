import { Router } from 'express';
import { logout } from '../controllers/logout.controller';

const logoutRouter = Router();

logoutRouter.post('/logout', logout);

export default logoutRouter;
