let EventEmiiter = require("events").EventEmitter;  //the varible contain a module "event" with a property "eventemitter"

let myevent = new EventEmiiter();       //we can use the above variable by the new keyword,  means we are creating an instance(object)

function ischoolHander1(event){
    console.log("iSchollEvent1 Happened",event);
};

function ischoolHander2(event){
    console.log("iSchollEvent Happened2",event);
};

function yschoolHander1(event){
    console.log("ySchollEvent Happened",event);
};

myevent.on("ischoolevent",ischoolHander1); //on means addListner
myevent.on("ischoolevent",ischoolHander2);
myevent.on("yschoolevent",yschoolHander1);


myevent.emit("ischoolevent",{time : new Date(), message  : "Hello there"});  //emit an event , time is a event object parameter
myevent.emit("yschoolevent",{time : new Date(), message  : "Hello there"}); 