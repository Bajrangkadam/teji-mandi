const sqlite3 = require('sqlite3').verbose();
const logger = require('../utils/logger');
const dataFile = require('./dataFile');


const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    logger.error(err.message);
    throw err
  } else {
    console.log('Connected to the SQLite database.');
    return dataFile.countriesData().then((data) => {
      db.run(`CREATE TABLE countries (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                country text, 
                year text, 
                value text,  
                category text)`,
        (err) => {
          if (err) {
            // Table already created
            logger.error(err.message);
          } else {
            // Table just created, creating some rows
            let countData = [];
            let insert = 'INSERT INTO countries (country, year, value,category) VALUES (?,?,?,?)';
            if (data && data.length !== 0) {
              for (let index = 1; index < data.length; index++) {
                db.run(insert, data[index], (err, res) => {
                  if (err) {
                    // Table already created
                    logger.error(err.message);
                  } else {
                    countData.push(index);
                    if (countData.length == data.length-1) {
                      console.log(`Total insterted record: ${data.length -1}`);
                    }
                  }
                });
              }
            }
          }
        });
    })
      .catch(err => {
        logger.error("Data file error : ", err.message);
      })
  }
});


module.exports = db
