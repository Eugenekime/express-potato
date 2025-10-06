import { Router } from 'express';
import { deleteAcc } from '../controllers/deleteAcc.controller.js';

const deleteAccRouter = Router();

deleteAccRouter.post('/deleteAcc', deleteAcc);

export default deleteAccRouter;
