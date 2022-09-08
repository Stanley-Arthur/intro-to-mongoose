const getUsers = (req,res)=>{
    res.status(200).send("get all users")
} 
const getUser = (req,res)=>{
    res.status(200).send("get user")
} 
const createUser = (req,res)=>{
    res.status(201).send("cretae user")
} 
const updateUser = (req,res)=>{
    res.status(200).send("update user")
} 
const deleteUser = (req,res)=>{
    res.status(200).send("delete user")
} 

module.exports ={
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}