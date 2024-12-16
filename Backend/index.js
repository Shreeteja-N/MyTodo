const express=require("express");
const { title } = require("process");


const app=express();

app.use(express.json)

app.post("/todo", async function(req,res){
    const createPayload=req.body;
    const parsePayload=create.safeParse(createPayload)

    if(!parsePayload.sucess){
        res.status(411).json({
            msg:"you sent the wrong Inputs"
        })
        return;
    }

    await todo.create({
        title:createPayload.tittle,
        description:createPayload.description,
        completed:false

    })
    res.json({
        msg:"todo created"
    })

})
