const result = document.getElementById("myDiv");

// Day 6 Home challenge solution
// solution 1
// (async ()=>{
//     const response = await fetch('https://cat-fact.herokuapp.com/facts');
//     const responseArray = await response.json();
//     console.log("responseArray",responseArray);
//     const fact= Math.round( Math.random()*responseArray.length);
//     result.innerHTML +=`Fact ${fact} -> ${responseArray[fact].text} <br>`;
// })();

// // solution 2
// fetch('https://cat-fact.herokuapp.com/facts')
//    .then((response)=>{
//         response.json()
//                 .then((responseArray) =>{
//                      console.log("responseArray",responseArray);
//                      const fact= Math.trunc( Math.random()*responseArray.length);
//                      result.innerHTML +=`Fact ${fact} -> ${responseArray[fact].text} <br>`;
//                 });
//    });


// solution 3
// fetch('https://cat-fact.herokuapp.com/facts')
//      .then(callback1);

// function callback1(response){
//     response.json()
//             .then(callback2)
//             .catch((err)=>  console.log("Json Error->",err) );
// }
// function callback2(responseArray)  {
//     console.log("responseArray",responseArray);
//     let nextRandom = Math.random();
//     let fact= Math.round( nextRandom*responseArray.length);
//     console.log("fact",fact);
//     if (fact>4) fact = responseArray.length-1;
//     if(fact<0) fact=0;
//     result.innerHTML +=`Fact ${fact} -> ${responseArray[fact].text}<br>`;
// }


// Day 7

// Array

// let myArray = [1,"2",3,4,5,6,7,88,9,100];
// result.innerHTML += `const myArray = [${ myArray.concat()}] <br>`;
// result.innerHTML += `const myArray = [${ myArray.join('-')}] <br>`;

// result.innerHTML += `length= ${ myArray.length} <br>`;

// myArray.push('Flavio');
// result.innerHTML += `const myArray = [${ myArray.concat()}] <br>`;
// result.innerHTML +=` - after push length =  ${ myArray.length} <br>`;
// myArray.pop();
// myArray.shift("Sebastian")
// myArray.unshift("Sebastian")
// console.log(myArray);
// result.innerHTML +=` - after pop length =  ${ myArray.length} <br>`;
// let newArray = myArray.concat(["orange","lime","apple","grape"]);
// result.innerHTML +=` - after concat() =  ${ newArray} <br>`;

// result.innerHTML +=` - after .indexOf('apple') =  ${ newArray.indexOf('apple')} <br>`;
// result.innerHTML +=` - after .slice(10, 12) =  ${ newArray.slice(10, 12)} <br>`;
// console.log(newArray);
// result.innerHTML +=` - after .splice(10, -3) =  ${ newArray.splice(10, 3)} <br>`;
// console.log(newArray);

// Loops
// myArray = [1,"2",3,4,5,6,7,88,9,100];

// for(let i = 0; i < 10; i++) {
//   result.innerHTML +=`myArray[${i}] = ${myArray[i]}<br>`;
// }
//console.log(myArray)
// for(const key in myArray) {
//   result.innerHTML +=`key =  ${ key} -> value = ${myArray[ key]}<br>`;
// }
// for(const value of myArray) {
//   result.innerHTML +=`value =  ${ value}  <br>`;
// }
// let sandwich = {
//   grilled: true,
//   butter: "lots",
//   bread: "whole wheat",
//   calories: 250
// }
// console.log(sandwich)
// result.innerHTML +=`sandwich.butter =   ${ sandwich.butter}<br>`;
// result.innerHTML +=`sandwich['butter'] =  ${ sandwich['butter']}<br>`;
// for(const key in sandwich) {
//   result.innerHTML +=`key =  ${ key} --- `;
//   result.innerHTML +=`value =  ${ sandwich[key]} <br>`;
// }
// myArray = [1,"2",true,4,sandwich,6,"7",8,9,10];

// myArray.forEach((v,k)=>{
//     result.innerHTML +=`v =  ${ v} -> k = ${ k }<br>`;
// });

// myArray = [1,"2",true,4,sandwich,6,"7",8,9,10];
// let newMapArray = myArray.map((value)=>{
//   console.log  (value)
//    return typeof value;
// })
// result.innerHTML += newMapArray;
// console.log("newMapArray",newMapArray)

// While Loop

// for(let i = 0; i < 10; i++) {
//    result.innerHTML +=`for -> i =  ${ i} <br>`;
// }
// let i=0;
// while  (i<10) {
//      result.innerHTML +=`while -> i =  ${ i++} <br>`;
// }
// i=0;
// do {
//   result.innerHTML +=`do -> i =  ${ i} <br>`;
// } while (++i<10);
// result.innerHTML +=`after do -> i =  ${ i} <br>`;

// // Daily Challenge solution
// const FizzBuzz=()=>{
// for (let i = 1; i <= 100; i++) {
//     // if (i % 3 === 0 && i % 5 === 0) {
//     //    result.innerHTML +=`FizzBuzz <br>`;
//     // }
//     // else if (i % 3 === 0) {
//     //    result.innerHTML +=`Fizz <br>`;
//     // }
//     // else if (i % 5 === 0) {
//     //    result.innerHTML +=`Buzz <br>`;
//     // }
//     // else{
//     //    result.innerHTML +=`${i}<br>`;
//     // }
//       result.innerHTML +=`<br>`;
//       if (i % 3 === 0 && i % 5 === 0) {
//         result.innerHTML +=`FizzBuzz <br>`;
//         break;
//       }
//     if (i % 3 === 0) {
//        result.innerHTML +=`Fizz`;
//        continue;
//     }
//     if (i % 5 === 0) {
//        result.innerHTML +=`Buzz`;
//        continue;
//     }
//     result.innerHTML +=`${i}<br>`;
// }
// }
// FizzBuzz();
//  result.innerHTML +=`Out the loop<br>`;


// DOM
// let result= document.getElementById("myDiv");
// result.innerHTML +=`Hello DOM<br>`;
// result.innerHTML += `${result.attributes.length}<br>`;
// for (let i = 0; i < result.attributes.length; i++) {
//     result.innerHTML += result.attributes[i].name + " = " + result.attributes[i].value + "<br>";
// }
// console.log("result",result);

// const ret= document.getElementsByTagName("input");
// console.log(ret, ret.length)
// for (const element of ret) {
//     if(element.type==="text"){
//         element.value="Bitwise"
//     }
//     else{
//         element.value="Js"
//     }
// }

// const retDiv= document.getElementsByTagName("div");
// console.log(retDiv, retDiv.length)
// for (const element of retDiv) {
//      for (let elementStyle in element.style) {
//        if(elementStyle=== "backgroundColor")
//           element.style[elementStyle] = "green";
//      }
//      element.style.width="100px";
//      element.style.height="100px";

// }

// const para = document.createElement("p");
// para.innerText = "This is a paragraph<br>";
// document.body.appendChild(para);
// const para2 = document.createElement("p");
// para2.innerHTML = "<strong style='color:red'>This is a paragraph</strong>";
// document.body.appendChild(para2);
// myDivObj = document.getElementById("myDiv");

// const newButtonClick = ()=>{
//    let newLabel = document.createElement("label");
//    newLabel.innerText = "Button was clicked";
//    newLabel.addEventListener('mouseover',eventMouseOver);
//    newLabel.addEventListener('mouseout',()=>{
//           newLabel.style["background-color"] = "white";
//           newLabel.style["color"] = "black";
//    newLabel.style["display"] = "none";

//          // newLabel.removeEventListener('mouseover',eventMouseOver);
//     });
//    newDiv.addEventListener('mouseover',eventMouseOver);
//    newDiv.appendChild(newLabel);
// }

// const newDiv = document.createElement("div");
// newDiv.style["background-color"] = "green";
// newDiv.style["color"] = "white";
// document.body.appendChild(newDiv);


// const newButton = document.createElement("button");
// newButton.innerText = "Click me";
// newButton.addEventListener('click',newButtonClick)
// myDivObj.appendChild(newButton);

// function eventMouseOver() {
//     this.style["background-color"] = "red";
//     this.style["color"] = "white";
// }newButton

async function getApi(url){
    const response = await fetch('https://reqres.in/api/users');
    const responseData = await response.json();
    console.log("responseData",responseData);
}
const newButton = document.createElement("button");
newButton.style["type"] = "text";
newButton.innerText = "Click me";
newButton.addEventListener('click',getApi)

