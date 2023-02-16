import express from 'express';
import { Register, Login, Logout } from '../controllers/users';

export const usersRouter = express.Router();

usersRouter.post('/signup', Register);

usersRouter.post('/login', Login);

usersRouter.post('/logout', Logout);
