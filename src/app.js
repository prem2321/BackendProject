import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

//to configure cors
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))

//get data from url
app.use(express.urlencoded({extended: true, limit: "16kb"}))

//public folder name
// stroe files such as image in public folder
app.use(express.static("public"))

//to access cookies from user browser
//to store secure cookies in user browser

app.use(cookieParser())



export { app }