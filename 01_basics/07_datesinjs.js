// Date


let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

let myCreatedDate = new Date("2023-01-14");
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime())
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long"
    //timeZone? "long"
})