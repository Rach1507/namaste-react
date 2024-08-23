
// concerrency model - single thread - one line of code is executed at a time




console.log("start");


setTimeout(()=>{console.log('timeout');}, 5000);

const start = new Date().getTime();
let end = start;

while(end < start + 10000){
    end = new Date().getTime();
}   

console.log('while loop ended');    

console.log("end");


// output :
// start
// while loop ended
// end
// timeout




console.log("start");

setTimeout(() => {
    console.log('0 timeout');
}, 0);

console.log('end');


// output:

// start    
// emd 
// 0 timeout

// use it to defer the execution of a function

// singlw thread - synchronous - one line of code is executed at a time
// whhy - ?
