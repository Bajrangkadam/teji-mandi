const dbQuery = require('./database');
// const cacheHelper = require('../utils/cacheHelper');
module.exports = {

  getAllCountries: () => new Promise((resolve, reject) => {
      let sql = `select * from countries`;
      let params = [];
      dbQuery.all(sql, params, (err, rows) => {
        if (err) {
          reject({
            status: "failed",
            message: err.message
          })
        } else {
          resolve({
            "status":'success',
            "message": "Data found successfull",
            "data": rows
          })
        }
      });
  }),

  getCountriesBasedOnYearAndCategory: (filterData) => new Promise((resolve, reject) => {
    let sql = "select * from countries";
    if(filterData && filterData.year && !filterData.category){
      sql +=` where year='${filterData.year}'`
    }

    if(filterData && filterData.category && !filterData.year){
      sql +=` where category like %'${filterData.category}'%`
    }

    if(filterData && filterData.category && filterData.year){
      sql +=` where year='${filterData.year}' and category like '%${filterData.category}%'`
    }
    
    let params = [];
    dbQuery.all(sql, params, (err, rows) => {
      if (err) {
        reject({
          status: "failed",
          message: err.message
        })
      } else {
        resolve({
          "status":'success',
          "message": "Data found successfull",
          "data": rows
        });
      }
    });
  }),

  getFilteredCountries: (filterData) => new Promise((resolve, reject) => {
    let sql = "";
    if(filterData &&  filterData.startyear && filterData.endyear){
      sql =`select * from countries where year BETWEEN '${filterData.startyear}' and '${filterData.endyear}' order by year asc`
    }else{
      reject({
        status: "failed",
        message: 'Invalid Paramters'
      })
    }
    
    let params = [];
    dbQuery.all(sql, params, (err, rows) => {
      if (err) {
        reject({
          status: "failed",
          message: err.message
        })
      } else {
        resolve({
          "status":'success',
          "message": "Data found successfull",
          "data": rows
        });
      }
    });
  }),

  getCountriesBasedOnId: (id) => new Promise((resolve, reject) => {
    if (!id) {
      reject({
        status: "failed",
        message: 'Invalid id'
      })
    } else {
      let sql = `select * from countries where id=${id}`;
      let params = [];
      dbQuery.all(sql, params, (err, rows) => {
        if (err) {
          reject({
            status: "failed",
            message: err.message
          })
        } else {
          resolve({
            "status":'success',
            "message": "Data found successfull",
            "data": rows
          })
        }
      });
    }
  })
};