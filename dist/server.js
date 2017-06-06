const express = require("express")
const app = express();
const path = require("path")


app.use(express.static(__dirname + "/"))

app.get("*", function(req, res){
    res.sendFile(path.resolve(__dirname, "./", "index.html"))
})

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
    console.log("server up an app")
})