


function proceedToPayment(orderDetails) {
    console.log(orderDetails);
    //   if(successful) output is this {orderId: '1233', status: 'success' }
    // if false : promises.js:23 Uncaught (in promise) Error: error
    // at promises.js:23:20
    // at new Promise (<anonymous>)
    // at addToCart (promises.js:11:12)
    // at promises.js:28:17

}

function addToCart(cartItems) {

    return new Promise((resolve, reject) => {
        // logic to create order 
        // validate cart 
        // check stock
        // create order
        // return order details

        if (cartItems.items) {
            resolve({ orderId: "1233", status: 'success' });
        }
        else {
            reject(new Error('Error: cart is empty '));
        }
    });
}

// const promise = addToCart({ items: ['item1', 'item2'] });
// promise.then(orderDetails => proceedToPayment(orderDetails))




// write a function that returns a promise
// the promise should resolve after 5 seconds
// consume the promise and log the result

function addToCartReturnPromiseAfter5SecTimeOut(cartItems) {

    // imagine this is a api call which takes 5 secs to complete 
    const promise = new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve({ orderId: "1233", status: 'success', cart: cartItems.items });
        }, 5000);
    })
    return promise;
}


const promiseWithTimeOut = addToCartReturnPromiseAfter5SecTimeOut({ items: ['item1', 'item2'] });
console.log("promiseWithTimeOut", promiseWithTimeOut);
// promiseWithTimeOut Promise {<pending>}
// immediately logs the promise object




promiseWithTimeOut.then(orderDetails => {
    console.log("orderDetails", orderDetails);

/* logs the order details after 5 seconds
{
    "orderId": "1233",
    "status": "success",
    "cart": [
        "item1",
        "item2"
    ]
}
*/
})

console.log("after promiseWithTimeOut.then", promiseWithTimeOut);

/* logs after promiseWithTimeOut.then 

Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: Object


*/




// the promise should reject after 2 seconds





//Error handling 


const promise = addToCart({  });
promise
.then(orderDetails => proceedToPayment(orderDetails))
.catch(err=>console.log(err.message))
