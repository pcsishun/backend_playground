const express = require("express");
const cors = require("cors");
const UserPlayground = require("./model/userplayground");
const finding = require('local-devices');
// const nmap = require('node-nmap');
const os = require('os');
const dns = require("dns");
// const nmap = require('libnmap');
// const nodePortScanner = require('node-port-scanner');

const app = express();

app.use(express.json());
app.use(cors()); 

// get network scaner 192.168.1.103 // 
app.get("/scannetwork", async (req, res)=> {

    // nmap.discover(function(err, report) {
    //     for (let item in report) {
    //       console.log(JSON.stringify(report[item]));
    //     }
    //   });
    // const networkInterfaces = os.networkInterfaces();
    // console.log(networkInterfaces);

    // // nmap.nmapLocation = 'nmap'; 
    // finding().then(devices => {
    //     console.log(devices)
    //   })
    
    // dns.lookup(require('os').hostname(), function (err, add, fam) {
    //     console.log('addr: ' + add);
    //   })

    // function actionFunction(data){
    //     console.log(data);
    //     console.log("Percentage complete" + scan.percentComplete());
    // }
    // var osandports = new nmap.OsAndPortScan("192.168.1.106");
     
    // osandports.on('complete', function(data){
    //     console.log(data);
    //     console.log("total scan time" + scan.scanTime);
    // });
     
    // osandports.on('error', function(error){
    //   console.log(error);
    // });
     
    // osandports.startRunScan();

    // dns.reverse(req.connection.remoteAddress, function(err, domains) {
    //     console.log(domains);
    // });
    
    res.send("ok")
});

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


