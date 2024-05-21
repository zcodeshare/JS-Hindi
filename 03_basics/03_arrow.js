const user = {
    username : "Jitendra",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "jitendra"
//     console.log(this.user);
// }

// chai()

const chai = function(){
    let username = "jitndra"
}
