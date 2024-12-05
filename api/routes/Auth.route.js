import express from 'express'
import { getUser, login } from '../controller/Auth.controller.js'

const AuthRoute = express.Router()

AuthRoute.post('/google-login', login)
AuthRoute.get('/get-user', getUser)
export default AuthRoute