
import express from 'express'
import { deleteUser, getAllUsers, login, register } from '../controller/userController.js';

const userRouter= express.Router();

userRouter.post('/register',register);
userRouter.post('/login',login)
userRouter.get('/all',getAllUsers);
userRouter.delete('/delete/:id',deleteUser);

export default userRouter;