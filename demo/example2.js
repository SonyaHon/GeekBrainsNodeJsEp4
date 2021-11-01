const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Path: ", (data) => {
    console.log("Data:", data);
    rl.close();
});

rl.on('close', () => {
    process.exit(0);
});
