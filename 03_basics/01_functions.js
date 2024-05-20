// function sayMyName(){
//     console.log("j");
//     console.log("i");
//     console.log("t");
//     console.log("n");
//     console.log("d");
//     console.log("r");
//     console.log("a");
// }

// //sayMyName();

// function addTwoNumbers(number1,number2){
//     console.log(number1+number2)
// }


// function addTwoNumbers(number1,number2){
//     //    let result = number1+number2;
//     //    console.log("Jitendra")
//        return number1+number2;
//     }
    
//const result = addTwoNumbers(3,5);
//console.log("Result : ",result);

function loginUserMessage(username){
    if(username === undefined)
        {
            console.log("Please enter the username")
            return;
        }
    return `${user} just logged in `
}


console.log(loginUserMessage(""))