import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import globalError from './middleWare/globalError.mjs'
import conn from './db/conn.mjs'
import connectDB from './db/conn.mjs'
import userRoutes from './routes/userRoutes.mjs'

const PORT = process.env.PORT || 3001
const app = express();
dotenv.config
connectDB()


app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

app.use('/api/user', userRoutes)


app.use(globalError)


app.listen(PORT, () => {
    console.log(`Server running in PORT: ${PORT}`)
})