if (process.env.NODE_ENV === 'production') {
    module.exports = require('./config.product.js');
} else {
    module.exports = require('./config.dev.js');
}