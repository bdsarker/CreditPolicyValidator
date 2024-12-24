const fs = require('fs');
const JSONStream = require('JSONStream');

const path = '../static/dealer.json';

const readDealrInfo = (internalCode) => {
    const readStream = fs.createReadStream(path, { encoding: 'utf8' });
    let dealerInfo ;
    const jsonStream = JSONStream.parse('*'); // Use '*' to parse all elements in the array

    readStream
        .pipe(jsonStream)
        .on('data', (data) => {
            if (data.internalCode && data.internalCode.toLowerCase() === internalCode.toLowerCase()) {
                dealerInfo = data;
            }
        })
        .on('end', () => {
            //console.log('Query completed.');
        })
        .on('error', (err) => {
            console.error('Error:', err);
        });
    return dealerInfo;
};

//queryJsonFile('826906');
module.exports ={readDealrInfo}