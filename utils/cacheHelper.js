let NodeCache = require('node-cache');

const cacheHelper = new NodeCache({ stdTTL: 7200, checkperiod: 3600 });

module.exports = {
    getCache: (key) => {
        return cacheHelper.get(key);
    },
    setCache: (key, data) => {
        return cacheHelper.set(key, data, 7200);
    },
    delCache: (key) => {
        cacheHelper.del(key);
    },
    flushCache: () => {
        cacheHelper.flushAll();
    }
}