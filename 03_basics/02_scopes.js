// //var c = 300
// let a = 300
// if(true){
//     let a = 10
//     const b = 20
//     //var c = 30
//     console.log("INNER : ",a)
// }

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a)
// //console.log(b)
// //console.log(c)

function one(){
    const username = "jitender"

    function two(){
        const website = "youtube"
        console.log(username)
    }

    //console.log(website);

    two()
}

one()


if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " Youtube"
        console.log(username+website)
    }
    //console.log(website)
}

//console.log(username)


//============Interesting========

function addone(one){
    return num+1
}

console.log(addone(5))

const addTwo = function(num){
    return num+2
}

addTwo(5)