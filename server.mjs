import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'
import globalError from 'middleWare'

const PORT = process.env.PORT || 3001
const app = express();
dotenv.config

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))

app.use(globalError)


app.listen(PORT, () => {
    console.log(`Server running in PORT: ${PORT}`)
})