// // let result= document.getElementById("myDiv");


// // // function dailyChallenge() {
// // //     // const number1 = prompt("Enter a number");
// // //     // const number2 = prompt("Enter another number");
// // //     // const convertedNumber1 = parseInt(number1);
// // //     // const convertedNumber2 = parseInt(number2);

// // //     const input = prompt("Enter two number separated by a ,")
// // //     const inputArr = input.split(',')
// // //     const convertedNumber1 = parseInt(inputArr[0])
// // //     const convertedNumber2 = parseInt(inputArr[1])
// // //     console.log(inputArr);

// //     if (convertedNumber1 > convertedNumber2) {
// //         alert(`${convertedNumber1} is greater than ${convertedNumber2}`)
// //     } else {
// //         alert(`${convertedNumber2} is greater than ${convertedNumber1}`)
// //     }

// // //    let result = convertedNumber1 > convertedNumber2 ?  `${convertedNumber1} is greater than ${convertedNumber2}`  :  `${convertedNumber2} is greater than ${convertedNumber1}`;
// // //  alert(result);

// // //     // This is an example do not recommend it.
// // //     // alert(`${convertedNumber1 > convertedNumber2 ? convertedNumber1 : convertedNumber2} is greater`)

// // // }
// // // dailyChallenge();

// // function splitPromptResponse(){
// //   return input.split(',');
// // }
// // let anotherVariable="this is a global scope";

// // function myFunction() {
// //   const convertToNumber=(anotherVariable)=>{
// //     console.log("convertToNumber => local Scope 2")
// //      return parseInt(anotherVariable)
// //   }
// //       console.log("convertToNumber => local Scope 1")

// //    const anotherVariable = splitPromptResponse(); //input.split(',')

// //    const convertedNumber1 = convertToNumber(anotherVariable[0])
// //    const convertedNumber2 = convertToNumber(anotherVariable[1])


// //    let result = convertedNumber1 > convertedNumber2 ?  `${convertedNumber1} is greater than ${convertedNumber2}`  :  `${convertedNumber2} is greater than ${convertedNumber1}`;
// //    alert(result);

// // }

// function convertToNumber(param1){
//     console.log("convertToNumber => global Scope")
//   return parseInt(param1)
// }
// // let ThisIsAlsoGlobalVariable=0;
// // let thisIsGlobalVariable=0;
//  let y=0;

// // const convertToNumber=(x)=>{
// //   // y=parseInt(x);
// //    return parseInt(x);
// // }
// // console.log(y)
// // y= convertToNumber("10")
// // console.log(y)

// //   const input = prompt("Out the function -  Enter two number separated by a ,")
// //   myFunction();

// // // const myObject = {
// // //   convertToNumber:(param1)=>{
// // //     return parseInt(param1)
// // //   }
// // // }
// // // console.log("myObject",myObject.convertToNumber("30"))

// // // const myObject= [1,2,3,4,5,6];

// // // const mystring="test";
// // // mystring.length


// // // const convertToNumber=(t,x = "2")=>{
// // //    return parseInt(x)%t;
// // // }
// // // let z="3";
// // // console.log(y);
// // // y= convertToNumber(z,"20");
// // // console.log(y);

// function concatName(firstName, middleName, lastName) {
//   return firstName + ' ' + middleName + ' ' + lastName;
// }
// let concatGWC = concatName('George', 'Washington', 'Carver');
// // console.log(concatGWC)
// // console.log(concatGWC.length)
//  console.log(concatGWC.split(' '))
//   let newArray=concatGWC.split(' ')
//  newArray.forEach((item)=> console.log(item,item.length))

//  for(let index=0; index<newArray.length; index++)
// {
//   console.log("for", newArray[index],newArray[index].length)
// }
// console.log(concatGWC.toLowerCase())

// console.log(concatGWC.toUpperCase())
// concatGWC=concatGWC.toUpperCase()
// console.log(concatGWC)

// function otherFunc(newArray) {
//   let ret="";
//   newArray.forEach((element,index) => {
//     console.log(index%2,index)
//     ret+=(index%2? element.toUpperCase(): element.toLowerCase())+" ";
//   });
//   return ret;
// }
// console.log(otherFunc(newArray))
// newArray.toString()

//  if(1>2) {
//    console.log("error");
//  }

// let checkPassword = ""
function myPassword(checkPassword){
   if (checkPassword.length <6 ){
   console.log("too short")
   } else if (checkPassword.length > 20) {
 console.log("too long")
 } else if (checkPassword[0] ) {
   console.log("too long")
   } else {
     console.log("you are good")
   }
 }
 myPassword(12334567)