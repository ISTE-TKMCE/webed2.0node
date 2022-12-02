const express = require("express")
const app = express()
const ejs = require("ejs")
const dbConnect = require("./utils/dbConnect")
const user = require("./models/user")
const bcrypt = require("bcryptjs")
const router = require("./routes/route")
app.set("view engine", 'ejs')

app.use(router)

dbConnect().then(()=>app.listen(5000)).catch(err=>console.log(err))