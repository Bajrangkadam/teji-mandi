let parse = require('csv-parse');
let fs = require('fs');

let csvData = [];

module.exports = {
  countriesData: () => new Promise((resolve, reject) => {
    fs.createReadStream('greenhouse_gas_inventory_data_data.csv')
      .pipe(parse({ delimiter: ',' }))
      .on('error', err => {
        reject(err);
      })
      .on('data', csvrow => {
        csvData.push(csvrow);
      })
      .on('end', () => {
        resolve(csvData);
      });
  })
}