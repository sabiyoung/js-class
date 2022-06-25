let result= document.getElementById("myDiv");

//  let isCorrect = confirm("Is it correct?");
//  result.innerHTML= `isCorrect = ${isCorrect}<br/>`;

//  if(isCorrect){
//    result.innerHTML+= "that is correct!!!";
//  }
//  else{
//     result.innerHTML+= "that is NOT correct!!!";
//  }

//  let myResponse = prompt("1+1?");
//  result.innerHTML= `1+1=${1+1}?  ${myResponse} <br/>`;
// result.innerHTML+= `myResponse type is  ${typeof myResponse }<br/>`;

//  if(+myResponse ===  (1+1) ){
//    result.innerHTML+= "that is correct!!!";
//  }
//  else{
//     result.innerHTML+= "that is NOT correct!!!";
//  }

//  result.innerHTML += `<p>Truthy and Falsy</p>`;
//   result.innerHTML += `<p>Falsy = <br>
//   - False,<br>
//   - 0,<br>
//   - Empty string (""),<br>
//   - Null,<br>
//   - Undefined,<br>
//   - NaN</p>`;

// let myVar = "3";
// let somethingElse= 3;
//  if( myVar=== somethingElse ){
//    result.innerHTML+= "that is true!!!";
//  }
//  else{
//     result.innerHTML+= "that is false!!!";
//  }


// result.innerHTML += `<p>null = ${(null?"true":"false")} </p>`;
// result.innerHTML += `<p>0 = ${(0?"true":"false")} </p>`;
// result.innerHTML += `<p>"" = ${(""?"true":"false")} </p>`;
// result.innerHTML += `<p>Undefined = ${(undefined?"true":"false")} </p>`;
// result.innerHTML += `<p>NaN = ${(NaN?"true":"false")} </p>`;

// result.innerHTML += `<p>Truthy = All other values</p>`;
// result.innerHTML += `<p>" " = ${(" "?"true":"false")} </p>`;
// result.innerHTML += `<p>"0" = ${("0"?"true":"false")} </p>`;

// result.innerHTML += `<p>Logical Operators</p>`;
//   result.innerHTML += `<p>
//   - &&  = and <br>
//   - ||  = or<br>
//   - !   = not</p>`;
// "not false" is equal to "true"
//  result.innerHTML += `<p>Comparison Operator</p>`;
//  result.innerHTML += `<p>=== strict equal</p>`;
//  result.innerHTML += `<p>1===1 = ${1===1} ---- 2===1 = ${2===1}</p>`;
//  result.innerHTML += `<hr />`;
//  result.innerHTML += `<p>!== strict not equal</p>`;
//  result.innerHTML += `<p>1!==1 = ${1!==1} ---- 2!==1 = ${2!==1}</p>`;
//  result.innerHTML += `<hr />`;
//  result.innerHTML += `<p>> greater than</p>`;
//  result.innerHTML += `<p>1>1 = ${1>1} ---- 1>0 = ${1>0}</p>`;
//  result.innerHTML += `<hr />`;
//  result.innerHTML += `<p> >= greater than or equal</p>`;
//  result.innerHTML += `<p>1>=1 = ${1>=1} ---- 0>=1 = ${0>=1}</p>`;
//  result.innerHTML += `<hr />`;
//  result.innerHTML += `<p> < less than</p>`;
//  result.innerHTML += `<p>0<1 = ${0<1} ---- 1<0 = ${1<0}</p>`;
//  result.innerHTML += `<hr />`;
//  result.innerHTML += `<p> <= less than or equal</p>`;
//  result.innerHTML += `<p>1<=1 = ${1>=1} ---- 1<=0 = ${1<=0}</p>`;

// result.innerHTML += `<p>1<=1 && 0<=1 = ${1>=1 && 0<=1} </p>`;


// let a="Flavio";


// switch (a) {
//     case "1096":
//     case "1095":
//         result.innerHTML +="<p>form 1095</p>" ;
//         break;
//     case "1099":
//         result.innerHTML +="<p>form 1099</p>" ;
//         break
//     default:
//         result.innerHTML +=`<p>form w2</p>`;
// }

//  if( a==="1095" || a==="1096" ){
//      result.innerHTML +="<p>form 1095</p>" ;
//  }
//  else if( a==="1099" ){
//      result.innerHTML +="<p>form 1099</p>" ;
//  }
//  else{
//       result.innerHTML +=`<p>form w2</p>`;
//  }


// Ternary Operator:  expression ? true : false;
// let a="w2";
// result.innerHTML += `<p>form  ${ (a==="w2" ? "w2" : "not valid") } </p>`;
// let b= (a==="w2" ? 2 : 0);
// result.innerHTML += `<p>form  ${ b } </p>`;
// result.innerHTML += `<p>b=  ${ ++b } </p>`;

result.innerHTML += `<h2>Daily challenge solution</h2>`;



try{
      const num1 = prompt("Enter a number", 100);
      result.innerHTML += `<p>num1 = ${num1}</p>`;
      console.log("num1",num1, typeof num1);
     let parsedNum1 = +num1; // parseInt(num1); // +num1;
    console.log("parsedNum1",parsedNum1, typeof parsedNum1);
    if(isNaN(parsedNum1)){
        throw " Num1 is not a number ";
    }
    const num2 = prompt("Enter another number", 200);
    result.innerHTML += `<p>num2 = ${num2}</p>`;
    let parsedNum2 = parseInt(num2); // +num2;
    console.log("num2",num2, typeof num2) ;
    console.log("parsedNum2",parsedNum2, typeof parsedNum2);
    if(isNaN(parsedNum2)){
      throw " Num2 is not a number ";
    }
    let num3=+parsedNum1/+parsedNum2;
   console.log("parsedNum1/+parsedNum2 = ",parsedNum1/+parsedNum2);
   console.log("num3",num3, typeof num3);
     if(parsedNum1=parsedNum2) {
       result.innerHTML += "<p>num1 is greater than num2</p>";
    }
    else if (parsedNum1<parsedNum2){
        result.innerHTML += "<p>num2 is greater than num1</p>";
    }
    else{
        result.innerHTML += "<p>num1 and num2 are equal</p>";
    }
}
catch(err){
     result.innerHTML +=`<p>Error: ${err}</p>` ;
}
// if(parsedNum1===parsedNum2 || parsedNum1!==parsedNum2 || parsedNum1!==parsedNum2) { }
// if(parsedNum1===parsedNum2 && parsedNum1!==parsedNum2 && parsedNum1!==parsedNum2) { }


