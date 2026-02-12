import express from 'express'
import { userLogin, userLogout, userRegister } from '../controllers/authController.js'

const authRouter = express.Router()

authRouter.post('/register', userRegister);
authRouter.post('/login', userLogin);
authRouter.post('/logout', userLogout);
