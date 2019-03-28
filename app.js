var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    seed        = require("seed.js");
    
var Parts = require("./models/parts.js");
    
var app = express();

var dbـURL = "mongodb://Hod:Hod123@ds227146.mlab.com:27146/api_db";

app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(dbـURL,{useNewUrlParser:true});


app.get("/:id",function(req,res){
    Parts.findById(req.params.id,function(err,result){
        if(err){
            console.log(err.message);
            res.send("error no data found!");
        }else{
            if(result){
                res.send(result);
            }else{
                res.send("No results found for this id");
            }
        }
    });
    
});

app.get("/*",function(req,res){
    res.send("Invalid URL format, please use this format ( / id )");
})

app.listen(process.env.PORT,process.env.IP);