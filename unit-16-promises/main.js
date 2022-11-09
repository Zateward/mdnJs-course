/*      USING THE FETCH() API:

The fetfh API is the modern replacement of the "XML-Http-Request" API and we use like the following:*/

*****************
**********************

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

console.log(fetchPromise); // in this line we are logging the Promise object that is a built-in object of the "fetch()" API

fetchPromise.then((response) => { // the then() method tells the script when the operation succeeds, the promise will call our handler, 									  // passing in a Response object, which contains the server's response.
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");

**********************
*****************

/*      CHAINING PROMISES:

Once you get a response object with the "fetch()" API, you need to call another function to get the response data,
in this case we wanto to get the response dats as JSON, so let's do this:*/

*****************
**********************

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});

**********************
*****************

/*The above example is bad because we have nested levels of code with "then()" calls

"then()" return a Promise itself so we can rewrite the above code like this:*/

*****************
**********************

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });

**********************
*****************

/*Instead of calling the second "then()", we can return the Promise returned by json(), and call the second then
 on that returned value. This is called "Promise Chaining"

Before moving to the next step we gotta have to check the server status code. We'll do this checking the status
code and  throwing an error if the status code wasn't "OK":*/

*****************
**********************

const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });

**********************
*****************

/*      CATCHING ERRORS:

The fetch() API can throw an error for many reasons, to support error handling, Promise objects provide a "cath()"
method. This is like "then()" (You call it and pass in a handler function). However, while the handler passed to 
"then()" is called when the asynchronous operation succeeds, the handler passed to "catch()" is called when the
asynchronous operation fails.

Let's try some "fetch()" code with an error in the url to make use of "catch()":*/

*****************
**********************

const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });

**********************
*****************

//When running the above code you should see the error logged by our "catch()" handler.


/*       PROMISE TERMINOLOGY:

Promises have a terminology, hope this help you to understand it.

First a promise can be in one of this three states:
  - pending: the  promise has been created, and the asynchronous function it's associated with has not succeeded or
  failed yet. This is the state your promise is in when it's returned from a call to "fetch()", and the request is 
  still being made.

  - fulfilled: the asynchronous function has succeeded. The "then()" handler is called.

  - rejected: the asynchronous function has failed. The "catch()" handler is called.

To see more about promises visit: https://thenewtoys.dev/blog/2021/02/08/lets-talk-about-how-to-talk-about-promises */


/*      COMBINING MULTIPLE PROMISES:

Sometimes you need all the promises to be fulfilled, but they don't depend on each other. In a case like that, it's much
more efficient to start them all off together, then be notified when they have all fulfilled. The "Promise.all()" method
is what you need here. It takes an array of promises and returns a single promise.

The promise returned by "Promise.all()"" is:
  - fulfilled when and if all the promises in the array are fulfilled. In this case the "then()" handler is called with
  an array of all the responses, in the same order that the promises were passed into "all()".

  - rejected when and if any of the promises in the array are rejected. In this case, the catch() handler is called with
  the error thrown by the promise that rejected.

For example: */

*****************
**********************

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });

**********************
*****************

/*We are making three "fetch()" with "Promise.all()". All the requests should be fullfilled, also the second one, but in
the second one the server will return 404 instead of 200, because the requested file doesn't exist.

If we change a const fetchPromise# with a badly formed URL, then the "catch()" handler will run.

"Promise.any()" allows you to fulfill any one of a set, this is fulfilled as soon as any of the array of promises is
fulfilled, or rejected if all of them are rejected.*/

*****************
**********************

const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`)
  });

**********************
*****************

/*Note that in this case we can't predict which "fetch()" request will complete first.*/


/*ASYNC AND AWAIT:

Adding the "async" keyword at the start of a function makes it an async function:*/

async function myFunction() {
  //This is an async function.
}

/*Inside an async function you can use the "await" keyword before a function that returns a promise. This enables you to
write code that uses asynchronous functions but looks like synchronous code. For example, we could use it to rewrite our
fetch example: */

async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  }
  catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
