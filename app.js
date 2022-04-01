const express = require("express");
const cors = require("cors");
const UserPlayground = require("./model/userplayground");

const app = express();

app.use(express.json());
app.use(cors()); 

app.post("/userplayground", async (req, res) => {
    const { username,  password } = req.body;
    try{
        const userProfile  = await UserPlayground.findOne({username});
        
        if(userProfile && (userProfile.password === password)){
            const replyText = {
                status: true, 
                text: userProfile
            }
            res.send(replyText)
        }else{
            
        }

    }catch(err){
        const replyText ={
            status: false, 
            text:"not found this username"
        }
        res.send(replyText)
    }
});


app.post("/register", async (req, res) => {
    const {username, firstname, lastname, password } = req.body;

    if(!(username && firstname && lastname && password)){
        const replyText = {
            registerStatus: false,
            text:"all input must not be empty."       
        }
        res.status(500).send(replyText);
    }else{
        try{
            const oldUser = await UserPlayground.findOne({username});

            if(!oldUser){
                await User.create({
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    password: password,
                })

                const replyText = {
                    registerStatus: true, 
                    text: "register success."
                }
                res.status(200).send(replyText)
            }else{
                const replyText = {
                    registerStatus: false,
                    text:"this user alreadly register."       
                }
    
                res.status(500).send(replyText);
            }
        }catch(err){
            const replyText = {
                registerStatus: false,
                text:"this user alreadly register."       
            }
            res.status(500).send(replyText);
        }
    }
});



module.exports = app;


