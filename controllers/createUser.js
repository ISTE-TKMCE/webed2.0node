const bcrypt = require("bcryptjs")
const createUser = async (req,res)=>{
    const name = req.params.name
    const password = await bcrypt.hash("password", 6)
    user.create({name: name, email: "kiran@gh", password: password}).then((response)=>console.log(response)).catch(err=>console.log(err))
}
module.exports = createUser