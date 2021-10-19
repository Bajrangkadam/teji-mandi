
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const swaggerui = require('swagger-ui-express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const json = require('./middlewares/json');
const swaggerconfiguration = require('./utils/swagger.json');

const app=express();
const APP_PORT =(process.env.PORT || 5060);
const APP_HOST = (process.env.APP_HOST || '127.0.0.1');

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(errorHandler.bodyParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(json);

// API Routes
app.use('/api', routes);
require("./services/database");
app.use('/api-docs', swaggerui.serve, swaggerui.setup(swaggerconfiguration));

// Error Middlewares
app.use(errorHandler.genericErrorHandler);
app.use(errorHandler.methodNotAllowed);

app.listen((process.env.PORT || 5060),()=> {
    console.log(`Server started at http://${app.get('host')}:${app.get('port')}`);
});