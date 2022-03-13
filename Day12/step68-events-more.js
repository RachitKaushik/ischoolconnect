let eventEmitter = require("events").EventEmitter;

let myevent = new eventEmitter();

myevent.on("ischoolEvent", function(){
    console.log("ischool Event Happened");
});
for(i=0;i<5;i++){
setTimeout(function(){
    
    
    myevent.emit("ischoolEvent");
    
    
},2000 *i);
}




/*
create an event that gets called once every 2sec for 5 times
*/