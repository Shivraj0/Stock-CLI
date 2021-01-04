const mongoose = require('mongoose');
const dbInfo = require('./src/config/config');

mongoose.Promise = global.Promise;
const db = mongoose.connect(dbInfo.url, {
        // Added to avoid warnings.
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        // Nothing to log.
    })
    .catch((err) => {
        console.info('Some error occured with the db connection.');
        process.exit();
    });

// Import model
const stocks = require('./src/model/stock');

// Add stock
exports.addStock = (newstock) => {
    stocks.create(newstock)
        .then(() => {
            console.info('Stock Added');
        })
        .catch((err) => {
            console.info('Some Error Occured while adding stock.');
            console.info(err);
        });
};

// Find stock
exports.findStock = (stockName) => {
    stocks.find({name: stockName})
        .then(result => {
            console.info(result);
        })
        .catch((err) => {
            console.info('Some Error Occured while finding.');
            console.info(err);
        });
};

// Update stock
exports.updateStock = (_id, newStock) => {
    // Parameter added to avoid warning.
    stocks.findByIdAndUpdate(_id, newStock, {useFindAndModify: false})
        .then(() => {
            console.info('Stock successfully updated.!');
        })
        .catch((err) => {
            console.info('Some error occured while updating stock');
            console.info(err);
        });
};

// Remove stock
exports.removeStock = (_id) => {
    // Parameter added to avoid warning.
    stocks.findByIdAndRemove(_id, {useFindAndModify: false})
        .then(() => {
            console.info('Stock successfully removed.!');
        })
        .catch((err) => {
            console.info('Some error occured while removing stock.!');
            console.info(err);
        });
};

// List all stocks.
exports.listStocks = () => {
    stocks.find()
        .then((allStocks) => {
            console.info('All Stocks.');
            console.info(allStocks);
        })
        .catch((err) => {
            console.info('Some error occured while Listing stocks.')
        });
};