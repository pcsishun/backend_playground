const express = require("express");
const cors = require("cors");
const UserPlayground = require("./model/userplayground");

const app = express();

app.use(express.json());
app.use(cors()); 

app.post("/userplayground", async (req, res) => {

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


