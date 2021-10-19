const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        name:'title',
        message:"What is the project's title?"
    },
    {
        type:'input',
        name:'description',
        message:"What is the project's description?"
    },
    {
        type:'input',
        name:'installation instructions',
        message:"What are the installation instructions?"
    },
    {
        type:'input',
        name:'usage',
        message:"What is this application used for?"
    },
    {
        type:'list',
        name:'license',
        message:"What is the project's license?",
        choices: ["ISC", "MIT", "IPL"]
    },
    {
        type:'input',
        name:'contributions',
        message:"What are the contribution guidelines?"
    },
    {
        type:'input',
        name:'test',
        message:"What tests sould be in place?"
    },
];

inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        const fileName = ("README.md");
        fs.writeFile(fileName, JSON.stringify(data, null, "\n"), (err) => {
            err ? console.error(err) : console.log("success!")
        });
    });
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
