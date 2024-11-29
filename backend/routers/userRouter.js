const express=require('express')
const {getUsers,login,addUser, updateUser,deleteUser}=require('../controllers/userController.js')
const userRouter=express.Router()
//http:localhost:3000/get
userRouter.get('/',getUsers)
//post
userRouter.post('/login',login)
userRouter.post('/',addUser)
userRouter.patch('/:id',updateUser)
//delete
userRouter.delete('/:id',deleteUser)
module.exports=userRouter
