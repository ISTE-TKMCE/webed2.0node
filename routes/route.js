const express = require("express")
const createUser = require("../controllers/createUser")
const mainpagecontroller = require("../controllers/mainpagecontroller")
const router = express.Router()
const mockdata = [{name: "My best day", body: "Nice evenings and a great partner", slug: 1},{name: "My worst day", body: "Storms and dissapointing people", slug: 2}]
router.get("/", mainpagecontroller)
router.get("/login", (req,res)=>res.render("login", {title : "login", loggedin: false}))
router.get("/register", (req,res)=>res.render("register", {title : "login", loggedin: false}))
router.get("/blogs", (req,res)=>res.render("myblogs", {title : "login", loggedin: false, blogs: mockdata}))
router.get("/:name", createUser)
module.exports = router