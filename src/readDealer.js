
const fs = require('fs');
const JSONStream = require('JSONStream');

const path = '../static/dealer.json';

const readDealerInfo = (internalCode) => {
    return new Promise((resolve, reject) => {
        const readStream = fs.createReadStream(path, { encoding: 'utf8' });
        let dealerInfo = {}; // Initialize an empty object to store the dealer info

        const jsonStream = JSONStream.parse('*'); // Use '*' to parse all elements in the array

        readStream
            .pipe(jsonStream)
            .on('data', (data) => {
                if (data.internalCode && data.internalCode.toLowerCase() === internalCode.toLowerCase()) {
                    //console.log('Dealer Info:', data);
                    dealerInfo = data; // Set the dealerInfo if a match is found
                }
            })
            .on('end', () => {
                resolve(dealerInfo); // Return the dealerInfo when the stream finishes
            })
            .on('error', (err) => {
                reject(err); // Reject the promise if there's an error
            });
    });
};

module.exports = {readDealerInfo};