var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"); 
    
var app = express();



app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

//mongoose.connect("mongodb://localhost:27017/???",{useNewUrlParser:true});


app.get("/",function(req,res){
    res.send("Hello world");
});

app.listen(8080,function(){
    console.log("App is running on port 8080 !");
})