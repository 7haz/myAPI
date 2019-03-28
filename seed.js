

// seed function 
var mongoose = require("mongoose");
var Part    =require("./models/parts.js");



function seed(items){
    items.forEach(function(item){
        var counter = 1;
        Part.create(item,function(err,createdItem){
            if(err){
                console.log("error creating item : "+item.title);
                console.log(err);
            }else{
                console.log(counter+"- Item created succussfully,"+createdItem.title);
                counter++
            }
            
        });
    });
}

// car part info :

var myParts = [{
    _id : "2203031060",
    title : "Throttle body",
    price : "$585.65",
    link : "https://parts.toyota.com/p/BODY-ASSEMBLY---THROTTLE-WITH-MOTOR/63031404/2203031060.html",
    car : "Toyota, fj cruiser",
    year : "2012"
},{
    _id : "4721735201",
    title : "Braker pump master cylinder",
    price : "2,800.44",
    link : "https://parts.toyota.com/a/63552784__6707469/BRAKE-MASTER-CYLINDER/663410-4702.html",
    car : "Toyota, fj cruiser",
    year : "2012"
},{
    _id : "4436060320",
    title : "Power steering reservoir",
    price : "$231.78",
    link : "https://parts.toyota.com/p/RESERVOIR-ASSEMBLY---VANE-PUMP-OIL/63544200/4436060321.html",
    car : "Toyota, fj cruiser",
    year : "2012" 
},{
    _id : "2220430010",
    title : "Air mass sensor",
    price : "$194.81",
    link : "https://parts.toyota.com/p/METER-SUB-ASSEMBLY---INTAKE-AIR-FLOW/63134271/2220430010.html",
    car : "Toyota, fj cruiser",
    year : "2012" 
},{
    _id : "9091902256",
    title : "Ignition coil",
    price : "$109.28",
    link : "https://parts.toyota.com/p/62987115/9091902256.html",
    car : "Toyota, fj cruiser",
    year : "2012" 
},{
    _id : "8211135A90",
    title : "Fuse box",
    price : "$203.23",
    link : "https://parts.olathetoyota.com/auto-parts/2012/toyota/fj-cruiser/base-trim/4-0l-v6-gas-engine/electrical-cat/electrical-components-scat",
    car : "Toyota, fj cruiser",
    year : "2012"
},{
    _id : "7774035531",
    title : "Fuel canister",
    price : "$766.46",
    link : "https://parts.toyota.com/p/CANISTER-ASSEMBLY---CHARCOAL/63508357/7774035531.html",
    car : "Toyota, fj cruiser",
    year : "2012"
},{
    _id : "9C3Z8101B",
    title : "Coolant Recovery Tank",
    price : "$51.99",
    link : "https://www.rockauto.com/en/catalog/ford,2013,taurus,3.5l+v6,1503824,cooling+system,coolant+recovery+tank,10457",
    car : "Ford, Taurus",
    year : "2013"
},{
    _id : "4720109210",
    title : "Master Cylinder",
    price : "$9.00",
    link : "https://www.rockauto.com/en/catalog/toyota,2013,hilux,2.7l+l4,3294248,brake+&+wheel+hub,master+cylinder,1836",
    car : "Ford, Taurus",
    year : "2013"
},{
    _id : "EP5Z6766A",
    title : "Oil Filler Cap",
    price : "$2.61",
    link : "https://www.rockauto.com/en/catalog/ford,2013,taurus,3.5l+v6,1503824,engine,oil+filler+cap,5269",
    car : "Ford, Taurus",
    year : "2013"
},{
    _id : "DA8Z14300BA",
    title : "Starter Cable",
    price : "$162.79",
    link : "https://www.rockauto.com/en/catalog/ford,2013,taurus,3.5l+v6,1503824,electrical,starter+cable,2501",
    car : "Ford, Taurus",
    year : "2013" 
},{
    _id : "8A5Z17618A",
    title : "Windshield Washer Fluid Reservoir",
    price : "$68.29",
    link : "https://www.rockauto.com/en/catalog/ford,2013,taurus,3.5l+v6,1503824,wiper+&+washer,windshield+washer+fluid+reservoir,10585",
    car : "Ford, Taurus",
    year : "2013"
},{
    _id : "281551922229",
    title : "Air filter cleaner box",
    price : "$73.00",
    link : "https://picclick.com.au/Air-Filter-Cleaner-Box-for-Toyota-Hilux-05-08-281551922229.html",
    car : "Toyota, Hilux",
    year : "2013"
},{
    _id : "7T4Z12029DA",
    title : "Ignition Coil",
    price : "$52.89",
    link : "https://www.rockauto.com/en/catalog/ford,2013,taurus,3.5l+v6,1503824,ignition,ignition+coil,7060",
    car : "Toyota, Hilux",
    year : "2013"
},{
    _id : "182971887260",
    title : "Power Steering Pump",
    price : "$102.03",
    link : "https://www.ebay.com/itm/Power-Steering-Pump-Fit-Toyota-Fortuner-Hilux-Innova-SW4-2-0L-1TR-FE-2-7L-2TR-FE-/182971887260",
    car : "Toyota, Hilux",
    year : "2013"
}];


