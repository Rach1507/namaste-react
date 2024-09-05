

// this will avoid - inversion of control

// const promise = addToCart(cartItems);
// promise.then(orderDetails => proceedToPayment(orderDetails))






    return new Promise((resolve, reject) => {
        if(successful){
            resolve('success');
        }
        else{
            reject(new Error('error'));
        }
    });


// write a function that returns a promise
// the promise should resolve after 5 seconds
// the promise should reject after 2 seconds
// consume the promise and log the result


