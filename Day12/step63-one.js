var user = "Rachit";
var firstname = "Rachit";
var lastname = "Kaushik";
var power = "8";

/*
console.log("user is",user);
function sayuser(){
    console.log("user Logged")
}
sayuser();
*/

//module.exports.user = "Batman";

//one way to export things     
/*          these all will be displyed as an array

module.exports.user = user;
module.exports.firstname = firstname;
module.exports.lastname = lastname;
module.exports.power = power;
*/


//second way                            these all will be displyed as an array
/*
module.exports = {
    user : user,
    firstname : firstname,
    lastname : lastname,
    power : power
};
 
*/

//third way     Destructuring                      these all will be displyed as an array


//module.export will display the content in the form of object

module.exports = {user,firstname,lastname,power};

