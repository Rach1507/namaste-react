// call back - any function that is passed on to a function as an argument , which will be invoked / called back later 
// javascript is single threaded - synchronous - one line of code is executed at a time
// callback functions provide a way to make it asynchronous

setTimeout(() => {
    console.log('timeout');
}, 5000);


function greet(){
    console.log('hi');
}

function callFunction(fun){
    console.log('calling function');
    fun();
}

callFunction(greet);



/* blocking the main thread -
    if the function takes a long time to execute -
    it blocks the main thread -
    because there is only one thread/ call stack in javascript

   */


    /*
    event listeners - tab - click event -
    // scope [2] - closure & global scope
    // handler - xyz
    */


    function addClickListener() {
        let count = 0;
        document.getElementById('btn').addEventListener('click', function xyz(){
            console.log('button clicked', ++count);
        })
    }

    addClickListener();