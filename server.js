
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const swaggerui = require('swagger-ui-express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./middlewares/errorHandler');
const json = require('./middlewares/json');
const swaggerconfiguration = require('./utils/swagger.json');

let app=express();
let port = 8081;

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

app.listen(port, () => {
    console.log(`Server listening on the port ${port}`);
})