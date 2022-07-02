const express = require('express')
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const helmet = require("helmet")
const morgan = require("morgan")
const app = express()
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// ROUTES
// const userRoutes
app.get('/', (req, res) => {
    res.send("Welcome to the home page")
})

// CONNECT TO DATABASE
mongoose.connect(process.env.MONGO_DB_URL).then(() => {
    console.log('Database connection successfull')
}).catch(() => {
    console.log('Error connecting to database')
})
//START APP ON THE PORT
app.listen(3030, () => {
    console.log('Backend server running at port 3030')
})