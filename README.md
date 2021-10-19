
# Teji Mandi API

---
## Prerequisites

* [Node.js](https://nodejs.org) - 8.9.0 or above
* [NPM](https://docs.npmjs.com/getting-started/installing-node) - 3.10.8 or above
---

---
## Setup


Finally, start the application.

    $ npm run start:dev (For development)
    $ npm run start (For production)

Navigate to http://localhost:8081/api-docs/ to verify installation.


## CURLS:

* Swagger docs : http://localhost:8081/api-docs/#/

* All countries : http://localhost:8081/api/countries/all

* Countries Base on Id : http://localhost:8081/api/countries/2

* Countries Base on start year & end year : http://localhost:8081/api/countries/getfilterdata?startyear=2011&endyear=2012

* Countries Base on Year & Catagary : http://localhost:8081/api/countries/?year=2010&category=co2
