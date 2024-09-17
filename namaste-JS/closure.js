function wrongSetTimeOut(){
    for(var i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}

// wrongSetTimeOut();

function setTimeOutUsingLet(){
    // let - block scope - new variable for each iteration - 
    for(let i = 0; i < 5; i++){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }
}


function setTimeOutUsingClosure(){

    function closure(i){
        setTimeout(function(){
            console.log(i);
        }, i*1000)
    }

    // closure - new variable for each iteration - 
    for(var i = 0; i < 5; i++){
        closure(i);
    }   
}

setTimeOutUsingClosure();


// using IIFE - immediately invoked function expressions 

function setTimeOutUsingVarAndClosure() {
    for (var i = 1; i <= 5; i++) {
        (function(num) {
            setTimeout(function() {
                console.log(num);
            }, num * 1000);
        })(i);
    }
}

// Test the function
setTimeOutUsingVarAndClosure();


function setTimeOutUsingVarAndClosure() {
    function createTimeout(num) {
        setTimeout(function() {
            console.log(num);
        }, num * 1000);
    }

    for (var i = 1; i <= 5; i++) {
        createTimeout(i);
    }
}

// Test the function
setTimeOutUsingVarAndClosure();