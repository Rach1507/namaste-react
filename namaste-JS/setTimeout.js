
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
// maybe for something hat comes later in the end / 4th page of the website

// singlw thread - synchronous - one line of code is executed at a time
// whhy - ?

/*
JavaScript was originally designed as a single-threaded language for several reasons:

1. Simplicity:
   - Single-threaded execution is simpler to implement and understand.
   - It eliminates many complex scenarios associated with multi-threaded programming, such as race conditions, deadlocks, and thread synchronization.

2. Browser environment:
   - JavaScript was initially created for web browsers, where the primary task was to manipulate the Document Object Model (DOM).
   - Having multiple threads manipulating the DOM simultaneously could lead to inconsistencies and race conditions.

3. Event-driven nature:
   - JavaScript's event-driven model works well with a single thread, using an event loop to handle asynchronous operations.
   - This model is efficient for I/O operations and user interactions, which are common in web applications.

4. Historical context:
   - When JavaScript was created in the mid-1990s, multi-core processors weren't common in consumer devices.
   - The language was designed for relatively simple scripting tasks in browsers, not for computationally intensive applications.

5. Avoiding complexity:
   - Multi-threaded programming introduces significant complexity and potential for errors.
   - By being single-threaded, JavaScript avoids many of the pitfalls associated with concurrent programming.

6. Consistency across environments:
   - A single-threaded model ensures consistent behavior across different browsers and JavaScript engines.

However, it's important to note that modern JavaScript has evolved to handle concurrent operations through:

- Asynchronous programming (callbacks, promises, async/await)
- Web Workers for background processing
- Node.js's event-driven, non-blocking I/O model

While these don't make JavaScript truly multi-threaded, they allow it to handle concurrent operations efficiently within its single-threaded nature.

The single-threaded design, combined with its event loop, has proven to be a powerful model for handling the asynchronous nature of web applications, contributing to JavaScript's widespread adoption and success.
*/


