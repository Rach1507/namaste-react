

what is a callback function ? 
what is it used for ? 
what are the benfits ?
what are the issues with callbacks ?
How can be resolved ?
explain all of this with an example ?




callback - function that is passed as an argument to another function , which will be called ack at a latter point of time in the code . 

callback - benefits - 
    - helps us do async ops in JS . 
    - in fact , we can say callbacks - are the reason async programming is possible in JS .



callback - issues  : 
1) callback hell-  pyramid of doom 
2) inversion of control 



1) callback hell -  pyramid of doom 
Ex: Read 3 files one after the other , only if file1 is successful , then file 2 , then file3 and print the data in the console

Ex 2: ecommerce - add to cart , then payment , then display the order summary page 


```js

fs.readFile('file1.txt', function(err, data){
    if(err) throw err;
    console.log(data);
    fs.readFile('file2.txt', function(err, data){
        if(err) throw err;
        console.log(data);
        fs.readFile('file3.txt', function(err, data){
            if(err) throw err;
            console.log(data);
        });
    });
});

```

nested callbacks - not maintainable 


2) inversion of control: 


we are not in control of the program flow ,
we are saying , if this happens , then do this , then do this , then do this .
we cant be sure of the order of execution  of the code / if they are executed or not or executed only once . 
we are passing the control of the program to the some other function (in this case an API) .
we are giving away the control of important ops to some other function ( which may be a third party function / api ) .



ecommerce - add to cart , then payment , then display the order summary page 


