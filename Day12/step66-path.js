let path = require("path");           // require a module path

let list = ["users","company","products"];

let files = ["info.html","history.html","profile.html","details.html"];

let url = path.join(list[Math.floor(Math.random()*list.length)], files[Math.floor(Math.random()*files.length)])

/*
for(let i = 0;i<list.length;i++){
let uu = path.join(list[i],files[i]);
console.log(uu);
}
*/

//join is a property of the module path to join two files ,folder
console.log(url);
