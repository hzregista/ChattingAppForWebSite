var app = require("express")();
var io = require("socket.io")(801);
var path = "";
var md5 = "";

app.get("/css/styles.css",function(req,res){
res.sendFile(__dirname+"/css/styles.css");
})
app.get("",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/SoundEffect.mp3",function(req,res){
    res.sendFile(__dirname+"/SoundEffect.mp3");
})
app.get("/message.html",function(req,res){
    res.sendFile(__dirname+"/message.html");
    md5 = req.query.md5;
})
app.listen((process.env.PORT || 80), function(){
console.log("Access Successful")
})
io.on("connection",function(socket){
    socket.on("disconnect",function(){
      console.log("Somebody left");  
    })
    socket.on(md5,function(msg){
        io.emit(md5,msg);
        console.log(msg);
    })
})