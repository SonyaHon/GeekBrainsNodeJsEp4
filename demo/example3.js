const inquirer = require('inquirer');

const options = [
    'option 1',
    'option 2',
    'option 3'
];

(async () => {
    const result = await inquirer.prompt([{
        name: 'optionKey',
        type: 'list',
        message: 'Choose option',
        choices: options
    }]);
    console.log('Result:', result);
})();
