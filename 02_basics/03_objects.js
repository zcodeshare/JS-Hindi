//Singleton

// Object literals

//object.create

const mySym = Symbol("key")

const jsUser = {
    name: "Hitesh",
    "full name":"Hitesh Choudhary",
    [mySym] : "mykey1",
    age : 23,
    location : "Jaipur",
    email : "hitesh@yahoo.com",
    isLoggedIn : false,
    lastLoggedInDay: ["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email = "hitesh@chatgpt.com"
Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello js user")
}

jsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
