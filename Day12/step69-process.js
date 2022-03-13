console.log(process.argv); //process event is used to process a thing  at a later point of time

let eventEmitter = require("events").EventEmitter;

let myevent = new eventEmitter();

process.nextTick(function(){
    myevent.emit("ischoolEvent");
});

myevent.on("ischoolEvent", function(){
    console.log("ischool event happpend");
});

console.log("hello from ischool");

for(let i=0;i<100;i++) {
    console.log(i);
}
