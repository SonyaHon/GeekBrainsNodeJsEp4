const yargs = require('yargs');

const options = yargs
    .usage("Usage: -p path")
    .option(
        "p",
        {
            alias: 'path',
            describe: 'Path to file',
            type: 'string',
            demandOption: true
        })
    .option(
        "c",
        {
            alias: 'config',
            desctibe: 'Application config path',
            type: 'string',
            demandOption: false,
        }
    )
    .argv;

console.log(JSON.stringify(options, null, 4));
