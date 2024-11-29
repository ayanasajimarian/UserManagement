const User=require("..//models/User.js")
const getUsers=async(req,res)=>{
    try{
        const users=await User.find({})
        res.status(200).json(users)
    }catch(error){
        res.status(500).json({error:error})
    }
}
//login 
const login=async(req,res)=>
    {
        const {email,password}=req.body
        const user= await User.findOne({email:email})
        if(!user){
            return res.status(500).json({message:"User not found"})
        }
    let isValid=false
    if(user.password==password){
        isValid=true
    }
    if(!isValid){
        return res.status(500).json({message:"Invalid credentials"})
    }
    res.status(200).json({message:"Login Successfull"})
    }
//create a user
const addUser=async(req,res)=>{
    try{
        var UserItem={
            name:req.body.name,
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }
        var user=new User(UserItem)
        await user.save()
        res.status(201).json(user)
    }catch(error){
        res.status(500).json({error:error})
    }
    }
//update
const updateUser=async(req,res)=>{
    try{
        const updatedUser=await 
        User.findByIdAndUpdate(req.params.id,req.body,
            {new:true})
           if(!updatedUser) return res.status(404).json
           ({message:"user not found"})
           res.json(updatedUser)
    }catch(error){
        res.status(500).json({error:error})

    }
}
//delete
const deleteUser=async(req,res)=>{
    try{
        const deletedUser=await 
        User.findByIdAndDelete(req.params.id)
        
           if(!deleteUser) return res.status(404).json
           ({message:"user not found"})
           res.json({message:"user deleted successfully"})
    }catch(error){
        res.status(500).json({error:error})

    }
}





module.exports={getUsers,login,addUser,updateUser,deleteUser}