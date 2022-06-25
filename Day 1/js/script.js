let result= document.getElementById("myDiv");

// Day 5 Home challenge solution
// const checkPassword = ()=>{
//   let myPw = document.getElementById('my-Password');
//   // let myPw = myPassword;
//   let myPwConf = document.getElementById('myPasswordConfirm').value;
//   if(myPw.value !== myPwConf ) {
//     returnMessage('Password are not equal');
//     myPw.focus();
//   }
//   else if(myPw.value.length<6){
//     returnMessage('Password are too short');
//     myPw.focus();
//   }
//   else if( myPw.value.length>=20 ){
//     returnMessage('Password are too long');
//     myPw.focus();
//   }
//   else if( +myPw.value[0]<10 ){
//     returnMessage('Password can not start with number');
//     myPw.focus();
//   }
//   else{
//        returnMessage('Password are approved');
//   }
// }
// // const checkPasswordV2 = ()=>{
// //   let myPw = document.getElementById('myPassword');
// //   let myPwConf = document.getElementById('myPasswordConfirm').value;
// //   if(myPw.value !==myPwConf ) {
// //     returnMessage('Password are not equal');
// //   }
// //   else if(myPw.value.length<6){
// //     returnMessage('Password are too short');
// //   }
// //   else if( myPw.value.length>=20 ){
// //     returnMessage('Password are too long');
// //   }
// //   else if( +myPw.value[0]<10 ){
// //     returnMessage('Password can not start with number');
// //   }
// //   else{
// //     returnMessage('Password are approved');
// //   }
// // }

// const returnMessage = (message)=> {
//     result.innerHTML = message;
//    // myPw.focus();
// }



// Day 6
// Promise
// const resolveOrReject = (resolve, reject) => {
//   setTimeout(() => {
//     let num=Math.random();
//     if(num>0.5){
//       resolve(`Task complete (${num})`);
//     }
//     else{
//       reject(`Task fail (${num})`);
//     }
//   }, 300);
// }
// const myPromise1 = new Promise(resolveOrReject);

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let num=Math.random();
    if(num>0.5){
      resolve(`Promise resolve (${num})`);
    }
    else{
      reject(`Promise reject (${num})`);
    }
  }, 300);
});

myPromise.then((response)=>{
  result.innerHTML += "response = "+response;
}).catch((err)=> {
  result.innerHTML += "err = "+err;
}).finally(( )=>{
  result.innerHTML += "<br>We done with this promise";
});

// myPromise.all();



 // Async

//  async function firstAsync(num) {

//      // let num=Math.random();
//       if(num>0.5){
//         return `Task complete (${num})` ;
//       }
//       else{
//         return `Task fail (${num})` ;
//       }
// }
// // firstAsync(.4).then(alert);

// // async function firstAwait(called) {
// //     let promise = new Promise((res, rej) => {
// //        let waitFewSeconds=Math.random()*10000;
// //        console.log(`waitFewSeconds (${called})`,waitFewSeconds)
// //        setTimeout(() => {
// //          res(firstAsync(waitFewSeconds))
// //        }, waitFewSeconds)
// //     });

// //     // wait until the promise returns us a value
// //     let promiseResult = await promise;

// //     // "Now it's done!"
// //     result.innerHTML +=`<br> (${called}) ${promiseResult}`;

// // };

// // firstAwait(1);
// // firstAwait(2);


// // try {
// // console.log("Success 1");
// // console.log("Success 2");
// // console.log("Success 3");
// // }
// // catch(err){
// // console.log("ERROR:", err)
// // }

// const firstName = ["Flavio", "Adam","Leila"];
// const lastName = ["Sampaio","Du","Radtke"];
// const myJsonObjArr = [{
//     firstName:"Flavio",
//     lastName:"Sampaio"
// },
// {
//     firstName:"Adam",
//     lastName:"Du"
// },{
//     firstName:"Leila",
//     lastName:"Radtke"
// }
// ];
// const myJsonObj =  {
//     firstName:"Flavio",
//     lastName:"Sampaio"
// };
// let index=0;
// const rev=myJsonObjArr.reverse();
// // result.innerHTML = rev[index].firstName
// // result.innerHTML +=" "

// // result.innerHTML += rev[index].lastName
// const otherJson={
// "employees":[
//     {"firstName":"John", "lastName":"Doe"},
//     {"firstName":"Anna", "lastName":"Smith"},
//     {"firstName":"Peter", "lastName":"Jones"}
// ],
// "employeeOfTheMonth":{"firstName":"John", "lastName":"Doe"}
// }
// console.log(  otherJson );
// console.log( JSON.stringify(otherJson));
// result.innerHTML +=   JSON.stringify(otherJson);

// console.log( JSON.parse(result.innerHTML));

fetch
let index=2;
(async () => {
    // GET request using fetch with async/await
    const response = await fetch('https://reqres.in/api/users');
    const responseData = await response.json();
    console.log("responseData",responseData);
     console.log("response",response);
     console.log("typeof response = ",typeof response);
     console.log("JSON.stringify()",JSON.stringify(responseData.data[index]));
//    // console.log("JSON.parse()",JSON.parse( '{"name":"Flavio"}'));
     result.innerHTML = `${responseData.data[index].first_name} ${responseData.data[0].last_name} <br>`;
    // result.innerHTML +=   JSON.stringify(responseData.data[index])+"<br>";
 //    result.innerHTML +=    responseData.data[0] +"<br>";
//    // result.innerHTML +=   JSON.parse( '{"name":"Flavio"}').name;
      let avatar= document.getElementById("image");
     avatar.src=responseData.data[index].avatar;

})();