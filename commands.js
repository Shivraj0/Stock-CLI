const program = require('commander');
const { prompt } = require('inquirer');

const {
    addStock,
    findStock,
    updateStock,
    removeStock,
    listStocks
} = require('./index');

const query = [
    {
        type: 'input',
        name: 'name',
        message: 'Stock name'
    },
    {
        type: 'input',
        name: 'exchange',
        message: 'Stock Exchange name'
    },
    {
        type: 'input',
        name: 'price',
        message: 'Stock buy price'
    },
    {
        type: 'input',
        name: 'volume',
        message: 'Stock quantity'
    }
]

program
    .version('1.0.0')
    .description('Stock Management CLI')

// Add stock.
program
    .command('add')
    .alias('a')
    .description('Buy a stock')
    .action(() => {
        prompt(requests)
            .then(response => addStock(response))
            .catch((err) => {
                console.info('Some error occured while adding through CLI.');
                console.info(err);
            });
    });

// Find stock.
program
    .command('find <stockname>')
    .alias('f')
    .description('Find a stock')
    .action((name) => findStock(name));

// Update stock.
program
    .command('update <_id>')
    .alias('u')
    .description('Update a stock')
    .action((_id) => {
        prompt(query)
            .then(response => updateStock(_id, response))
            .catch((err) => {
                console.info('Some error occured while updating through CLI.')
                console.info(err);
            })
    });

// Remove stock.
program
    .command('remove <_id>')
    .alias('r')
    .description('Remove a stock')
    .action((_id) => removeStock(_id));

// List stocks.
program
    .command('list')
    .alias('l')
    .description('List all stocks')
    .action(() => listStocks());

program.parse(process.argv);
