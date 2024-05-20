//const tinderUser = new Object()
const tinderUser = {}

tinderUser.idd = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIN = false


//console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname : {
        userfullname:{
            firstname:"hitesh",
            lastname:"choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}

//const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2)
// console.log(obj3);


console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hashOwnProperty(isLoggedIN));

const course = {
    coursename : "js",
    price : "999",
    courseInstructor : "hitesh"
}

// course.courseInstructor

const {courseInstructor} = course

console.log(courseInstructor)