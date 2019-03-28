var express     = require("express"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"); 
    
var Parts = require("./models/parts.js");
    
var app = express();


app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/car_parts",{useNewUrlParser:true});


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

app.listen(8080,function(){
    console.log("App is running on port 8080 !");
})