const mongoose = require("mongoose");
const CONNECTION_STRING = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

exports.connect = () => {

    // Connect to mongodb // 
    mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("connected to database")
    })
    .catch((error) => {
        console.log("error connecting")
        console.error(error)
        process.exit(1)
    });

}