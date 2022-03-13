let os = require("os");            //os is the module refer to as operating system we are working on 

console.log(os.arch());             //arch is the property of the module os
console.log(os.cpus().length);
console.log(os.totalmem()/1024,"KB");
console.log(os.freemem()/1024,"KB");
console.log(os.userInfo().username);