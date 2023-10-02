
// Write a function that takes the base and height of a 
// triangle and return its area

 function calc() {
     var hight=20
 var width=30
 return(20 * 30) * .5;
}
 console.log(calc());


// Create a function that takes the age in years and
// returns the age in days and print it on console

var birthDate = new Date("2005-12-7");
var currentDate = new Date();
var ageInMilliseconds = currentDate - birthDate;
var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
console.log("العمر بالأيام: " + ageInDays);

// Create a function takes two numbers and return 
// thier sum Create a function takes two numbers and 
// return thier sum

 function calc(one , two) {
   return ( one + two);
 }
 console.log(calc(10 , 20));


//  Create a function that takes an array containing 
//  only numbers and return the first element

    var countries = ["rahma", "mohamad", "yasser", "ahmad", "ayman", "abdelrahman", "alaa", "hassan","osama", "ali", "medo"];

    console.log(countries[0]);


    // Create a function show your name in HTML 
    // document

 document.getElementById("text").innerHTML="Rahma Ayman fathy"


//  Write a function that takes an integer hours and 
//  converts it to second .

 function calc(minutes) {
    return minutes * 60;
 }
 console.log( calc(1));


//  Given four numbers, return true if the sum of both 
//  numbers is more than 350. Otherwise return false

function calc(a , b , c , d) {
    var total =100+100+100+100;
if(total>350) {
    return true;
}else if (total<350){
    return false;
}
}
document.getElementById("if").innerHTML="ture"


// crite function that takes a number that,
//  if it is equal to zero, returns true, otherwise it returns f

function zeero(a) {
if(a===0) {
    return true;
} else {
    return false
}
}
console.log( calc(0));


// Check if input variable is a number or not
var input = "123"; 
if ( input === "number") {
  console.log(" input is a numper");
} else {
  console.log("inpute is not numper");
}


// Write a JavaScript function to get the current date

var currentDate = new Date();
var year = currentDate.getFullYear(); // السنة
var month = currentDate.getMonth() + 1; // الشهر (يبدأ من 0 ، لذا يتم إضافة 1)
var day = currentDate.getDate(); // اليوم
console.log("التاريخ الحالي: " + year + "-" + month + "-" + day);






