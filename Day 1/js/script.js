 var displayElement =  document.getElementById("displayData");
displayElement.innerHTML="Hello Students!!!"; // in line comment

// CamelCase
// snake_case
/**
 * Describe what function does. Very good for documentation.
 */
function getConfirmation(param){
   var response=confirm(param);
   var disp = `response ${response? 'OK':'Cancel'}  was clicked!`;
   console.log(disp);
}

console.log("Hi I'm console log");
console.error("Hi I'm console error");
console.warn("Hi I'm console warn");

// Create a Github repository from command line (CLI)
// https://gist.github.com/alexpchin/dc91e723d4db5018fef8



/*
Block of comments!
We can comment in multiple lines.

*/

function IDontKnowWhat2Do(){
   // TODO: need create new variable for ...
}
