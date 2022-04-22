// TODO: Include packages needed for this application
const inquirer = require ('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const writeFile = require('./utils/generate-input.js');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt ([

{
    type: 'input',
    name: 'projectTile',
    message: 'What is the title of your project?',
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please enter a title for your project');
            return false
        }
    }
},
{
    type: 'checkbox',
    name: 'contents',
    message: 'Please select all elements to apply to your table of contents.',
    choices: ['installation', 'Usage', 'License', 'Contribuation', 'Test', 'Questions' ]
},

{
    type: 'input',
    name: 'installation',
    message: 'What steps are required to install your project?',
    validate: installtionInput => {
        if (installtionInput) {
            return true;
        } else {
            console.log('Please enter a guide for installation');
            return false
        }
    }
},
{
    type: 'input',
    name: 'usage',
    message: 'Please provide instructions and examples for use'
},
{
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Are there any licenses that need to be referenced?',
    default: true
},
{
    type: 'checkbox',
    name: 'license',
    message: 'Select a License',
    choices: ['Apache', 'MIT', 'GPL', 'BSD'],
    when: ({ confirmLicense }) => confirmLicense
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please provide the names of the contributor(s)'
},
{
    type: 'input',
    name: 'test',
    message: 'Provide a guide for your application'
},
{
    type: 'input',
    name: 'questions',
    message: 'Provide your github User Name',
    validate: questionsInput => {
        if (questionsInput) {
            return true;
        } else {
            console.log('Please enter your github name')
            return false
        }
    }
},
{
    type: 'input',
    name: 'email',
    message: 'Provide a valid email address',
    validate: emailInput => {
        if (emailInput) {
            return true;
        } else {
            console.log('please provide a valid email address');
            return false
        }
    }
},

])

};

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

promptUser ()
      .then(response => generateMarkdown(response))
      .then(readmeInput => {
          return writeFile(readmeInput);
      }) .catch(err => {
          console.log(err);
      });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
