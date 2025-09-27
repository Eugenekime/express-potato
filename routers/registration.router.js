import { Router } from 'express';
import { createUser } from '../controllers/registration.controller.js';
import { body } from 'express-validator';

const registrationRouter = Router();

registrationRouter.post(
  '/sign-up',
  [
    body('email').isEmail().withMessage('Введите корректный email'),
    body('password').isLength({ min: 6 }).withMessage('Минимум 6 символов'),
  ],
  createUser
);

export default registrationRouter;
