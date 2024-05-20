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


//console.log(loginUserMessage(""))

function calculateCarPractice(...num1){
    return num1
}

//console.log(calculateCarPractice(200,300,400,123,456,654,678))

const user = {
    username : "jitendar",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and prince is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username : "sam",
    price : 343
})

const mtyNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(mtyNewArray));

console.log(returnSecondValue([200,400,500,1000]))