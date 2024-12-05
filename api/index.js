import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import AuthRoute from './routes/Auth.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()

const app = express()
const PORT = process.env.PORT
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/auth', AuthRoute)

mongoose.connect(process.env.MONGODB_CONN).then(() => {
    console.log('Database Connected.')
}).catch(err => console.log('Database connection failed.', err))


app.listen(PORT, () => {
    console.log('Server Running On PORT:', PORT)
})