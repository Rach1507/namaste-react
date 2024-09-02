


greet();
// helllo(); - helllo will throw an error as it is not hoisted - 


//function statement

function greet(){
    console.log('hi');
}

// function expression
// function used as a value

var helllo = function(){
    console.log('hello');
}

// difference  between function statement and function expression - hoisting

// function statement - hoisted - can be called before the function is defined
// function expression - not hoisted - can be called only after the function is defined in order of execution 

greet();
helllo();


// anonymous function 
// function without a name


// function(){ 
//     console.log('hi');
// } // error - function statements should have a name 



// named function expression : 
var named = function xyz (){
    console.log(xyz);
}

named();
// ƒ xyz (){
    // console.log(xyz);
// }



// xyz can be accessed inside this function , but not created / present in outer scope  - 
// 

// parameters and arguments 


function fun(param1, param2){
    console.log(param1, param2);
}

// param1 , param2 are parameters - local variables of the function - only accessible inside that scope
fun("arg1","arg2");

