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

