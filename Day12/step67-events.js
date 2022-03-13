let EventEmiiter = require("events").EventEmitter;  //the varible contain a module "event" with a property "eventemitter"

let myevent = new EventEmiiter();       //we can use the above variable by the new keyword,  means we are creating an instance(object)

function ischoolHander(){
    console.log("iSchollEvent Happened");
}
myevent.addListener("ischoolevent",ischoolHander);

myevent.emit("ischoolevent",{time : new Date(), message  : "Hello there"});  //emit an event , time is a event object parameter
