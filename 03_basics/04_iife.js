//Immediate Invoked Function Expressions(IIFE)

(function chai(){
        //named iife
    console.log(`DB Connected`);
})();

( (name) => {
    console.log(`db connected two ${name}`);
})('hitesh')