//   Primitive 

// 7 types : String , Number , Boolean , null , undefined , Symbol , Symbol , BigInt

const score= 100
const scoreValue = 100.3
const isLoggedIn = false 
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId)

const bignumber = 1234556788976565n
console.log(typeof bignumber)


// Reference (Non Primitive )

// Array , Object , Functions 


const heros = [shaktiman , "naagraj"  , "doga"]

let myObj = {
    name : "jitendra",
    age  : 21
}

// const myFunction = function(){
//     console.log("Hello World");
// }

// console.log(typeof outsideTemp)