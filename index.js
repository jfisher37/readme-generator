// TODO: Include packages needed for this application

const fs = require(`fs`);
const inquirer = require(`inquirer`);

//create a template for readme



//create license badges

const mit = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
const gnuGpl = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
const apache = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What's your project called?`,
        name: `projectName`,
    },
    {
        type: `input`,
        message: `Write a description of your project.`,
        name: `description`,
    },
    {
        type: `input`,
        message: `Write instructions to install your project.`,
        name: `install`,
    },
    {
        type: `input`,
        message: `Write instructions on how to use your project.`,
        name: `usage`,
    },
    {
        type: `input`,
        message: `Write instructions on how to make contributions to your project.`,
        name: `contributions`,
    },
    {
        type: `input`,
        message: `Write instructions on how to test your project.`,
        name: `tests`,
    },
    {
        type: `input`,
        message: `What is your Github username?`,
        name: `github`,
    },
    {
        type: `input`,
        message: `What's your email address?`,
        name: `email`,
    },
    {
        type: 'list',
        message: 'Under which license would you like your project covered?',
        name: 'license',
        choices: ['MIT', 'GNU GPL', 'Apache'],
    },
];

// TODO: Create a function to write README file





// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            if(response.license === `MIT`){
                chosenLicense = mit;
            }
            else if(response.license === `GNU GPL`){
                chosenLicense = gnuGpl;
            }
            else if (response.license === `Apache`){
                chosenLicense = apache
            };

            const template = `# ${response.projectName}
${chosenLicense}

## Description
${response.description} 

## Table of Contents 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${response.install}


## Usage
${response.usage}

## License
This project is covered by a ${response.license} license.

## Contributing
If you want to make contributions, please refer to the following instructions:

${response.contributions}

## Tests
${response.tests}

## Questions
Please refer to the below contact information for any questions:

Github Profile - ${response.github}\n
Github Profile Link - https://github.com/${response.github}\n
Email - ${response.email}

`;
            fs.writeFile(`${response.projectName}.md`, template, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
        })
}

// Function call to initialize app
init();
