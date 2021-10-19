const express = require('express');
const countries = require('../services/countriesService');
let router = express.Router();

/**
 * GET /api/countries/all
 */
 router.get('/all', (req, res, next) => {
  countries
    .getAllCountries()
    .then(data => res.json(data))
    .catch(err => next(err));
});

/**
 * GET /api/countries
 */
 router.get('/', (req, res, next) => {
  countries
    .getCountriesBasedOnYearAndCategory(req.query)
    .then(data => res.json(data))
    .catch(err => next(err));
});


/**
 * GET /api/countries/getfilterdata
 */
router.get('/getfilterdata', (req, res, next) => {
  countries
    .getFilteredCountries(req.query)
    .then(data => res.json(data))
    .catch(err => next(err));
});

/**
 * GET /api/countries/:id
 */
router.get('/:id', (req, res, next) => {
  countries
    .getCountriesBasedOnId(req.params.id)
    .then(data => res.json(data))
    .catch(err => next(err));
});

module.exports = router;
