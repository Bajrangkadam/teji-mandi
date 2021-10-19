const Router = require('express');
const countriesController = require('./controllers/countries');

/**
 * Contains all API routes for the application.
 */
let router = Router();

router.get('/', (req, res) => {
  res.json({
    app: 'Teji Mandi',
    apiVersion: '1.0'
  });
});

router.use('/countries', countriesController);

module.exports = router;