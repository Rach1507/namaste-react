Block

-set of statemtents
-used to replace a single statement
-or used to group a bunch of statments together and use where javascripts expects a single statement

ex : if 



BLOck scope -


var - function scope ?????
let - block scope
const - block scope


What is Shadowing 

var a= 111;
{
    var a = 10;
}

log(a); // 10


let a = 111;
{
    let a = 10;
}   
log(a); // 111


function - same behaviour 
illegal shadowing -


