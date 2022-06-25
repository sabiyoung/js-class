// DAY 03


// // An String
// let myString = "Hello World";
// console.log("myString            = ", myString);
// console.log("length              = ", myString.length);
// console.log("includes('orl')     = ", myString.includes('orl'));
// console.log("includes('@')     = ", myString.includes('@'));
// console.log("myString[0]         = ", myString[0]);
// console.log("myString[11]         = ", myString[myString.length-1]);
// console.log("indexOf('World')    = ", myString.indexOf('World'));
// console.log("indexOf('o')    = ", myString.indexOf('o'));
// console.log("indexOf('o')    = ", myString.indexOf('o',myString.indexOf('o')+1));
// console.log("slice(3,7)          = ", myString.slice(3,7));
// console.log("startsWith('Hello') = ", myString.startsWith('Hello'));
// console.log("endsWith('Hello')   = ", myString.endsWith('Hello'));

// Split an String
// let message = "id,phoneNumber,firstName,lastName,address1,address2,state,zip";
// let message = "    Hello World   ";
// console.log(message);
// let newStringArray = message.split('');
// console.log(newStringArray );
// let reversedStringArray = newStringArray.reverse();
// console.log(reversedStringArray );
// let reversedString = reversedStringArray.join('');
// console.log('|'+reversedString+"|")
// console.log(reversedString.toUpperCase());
// console.log(reversedString.toLowerCase());
// console.log("|"+message.trimEnd()+"|");
// console.log("|"+message.trimStart()+"|");
// console.log("|"+message.trim()+"|");


// alert only shows a message

//console.log('Print this');
//alert("Show a message");

// prompt Takes an input from the user
// const userName = prompt("Enter your name");
// const howUserIsDoing = confirm(`Hello, ${userName}! How are you today?`);
// console.log('howUserIsDoing =',howUserIsDoing);
// const constantVariable= 10;
// constantVariable=11;

// const enteredNumber = prompt("Enter a number",10);
// console.log(  parseInt(enteredNumber));

// const constantVariable=10;
// console.log(constantVariable);
// {
//   let constantVariable = 11;
// }
// console.log(constantVariable);

// const constantObject={
//     firstName:"Flavio",
//     LastName:"Sampaio",
//     id:10
// };
// console.log(constantObject);

// constantObject.firstName="Luis"
// console.log(constantObject);


// // CHALLENGE 1
// // Prompt the user for their first name
// // Store their input to a variable
// let userFirstName = prompt("Please enter your first name");
// // Reverse your user’s name
// // Convert to an array
// let nameArray = userFirstName.split('');
// // reverse the array
// let reversedArray = nameArray.reverse();
// // Join array
// let reversedUserName = reversedArray.join('');
// // alert the reversed string
// alert(reversedUserName);

// // Challenge 2
// // Prompt for a number value (provide a default of 10)
// const num1 = prompt("Enter a number", 10); // second value 10 adds a default for the input
// // Prompt for a second number value (provide a default of 10)
// const num2 = prompt("Enter another number", 10);

// // Convert the prompted values into integers using parseInt()
// const addedValues = parseInt(num1) + parseInt(num2);
// // Add the numbers together and alert the user with the result
// alert(addedValues);


// Math
// let stringNum= "10";
// let num=parseInt(stringNum);
// alert(num);


// let doMathE = Math.E;

// console.log( "doMathE  ",doMathE   );

// let doMathLN2 = Math.LN2;
// console.log( "doMathLN2",doMathLN2 );
// let doMathPI = Math.PI;
// console.log( "doMathPI ",doMathPI  );

// console.log( "Math ",Math.trunc(5.53454)  );
// console.log( "Math round up ",Math.round(5.53454)  );
// console.log( "Math round down",Math.round(5.43454)  );

// console.log( "Math ",Math.min(1,4,3,-1,20,5)  );

// console.log( "Math ",Math.max(1,4,3,-1,20,5)  );

// console.log( "Math.random() ",Math.random()  );
// console.log( "Math.random() ",Math.random()  );
// console.log( "Math.random() ",Math.random()  );
// console.log( "Math.random() ",Math.random()  );

// let randomNumber=Math.random();
// console.log( "Math.random() ",randomNumber, Math.trunc(randomNumber*6 ) );
// console.log( "Math.random() ",Math.trunc(Math.random()*6 ) );
// console.log( "Math.random() ",Math.trunc(Math.random()*6 ) );
// console.log( "Math.random() ",Math.round(Math.random()*6 ) );

// Date
// const dateString = Date().toString() ;
// // console.log( "dateString ",dateString  );

// const dateVariable = new Date();

// console.log( "day of the week ",dateVariable.getDay()  );

// console.log( "day ",dateVariable.getDate()  );
// console.log( "month ",dateVariable.getMonth()  );
// console.log( "year ",dateVariable.getFullYear()  );
// console.log( "Now ",Date.now());
// debugger
// console.log( "Now ",Date.now());



// Depending on timezone, your results will vary
// const events = new Date('19 Aug 1975 18:00:00 GMT+00:00');
const events = new Date( Date().toString());
// const events = Date( );

// console.log(events.toLocaleTimeString('it-IT'));

// console.log(events.toLocaleTimeString('en-US'));

// console.log(events.toLocaleTimeString('ar-EG'));
// console.log(events.getTime());
// console.log( "year before ",events.getFullYear());
// events.setFullYear(2021)
// console.log( "year after",events.getFullYear());
console.log(events.toString());
console.log(events.toLocaleTimeString('en-US'));



let num1 = prompt();
let num2 = prompt();
let result =`${num1} + ${num2}`

alert(parseInt(result))
