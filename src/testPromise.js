let result;  // Variable to store the result

// Using the Promise
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello, Promise!');
    }, 2000);
});

// Using .then() approach
myPromise.then((value) => {
    result = value;  // Set the result in .then()
    console.log('Using .then():', result);
});

// Using async/await approach
const setResultAsync = async () => {
    result = await myPromise;  // Set the result using await
    console.log('Using async/await:', result);
};

setResultAsync();
