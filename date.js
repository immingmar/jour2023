//module is a global object which can be used anywhere
//it has it's own properties and methods
exports.getDate = function() {
     //logic to check whether the day is weekend or not
 var today = new Date();
 var currentDay = today.getDay();
 var options = {
     weekday: "long",
     month: "long",
     day: "numeric"
 };
 var day = today.toLocaleDateString("en-US", options);
 return day;
 }

exports.getDay = function () {
    //logic to check whether the day is weekend or not
var today = new Date();
var currentDay = today.getDay();
var options = {
    weekday: "long"
};
var day = today.toLocaleDateString("en-US", options);
return day;
}

console.log(module.exports);
