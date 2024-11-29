const express=require('express')
const mongoose = require('mongoose');
const userRouter=require('./routers/userRouter')
const cors=require('cors')

const app=express()
const port=3000
app.use(cors())

app.use(express.json())
//http:localhost:3000
app.get('/',(req,res)=>{
    res.send("from the server")
})
//http:localhost:3000/users
app.use('/users',userRouter)


main()
.then(()=>console.log("DB connected"))
.catch(err=>console.log(err))

async function main() {
    await mongoose.connect('mongodb+srv://ayanasaji17:zjeOJIjpKFyllWAI@cluster0.vcwxi.mongodb.net/MCKA-PROJECTDB');
}



app.listen(port,()=>{
    console.log("server started")
})