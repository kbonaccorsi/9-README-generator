//modules to be used throughout application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// questions for users to answer, in order to populate README
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is the project's title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the project's description?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the installation instructions?"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is this application used for?"
    },
    {
        type: 'list',
        name: 'license',
        message: "What license did you use?",
        choices: ["The ISC License", "The MIT License", "The IPL License", "N/A"]
    },
    {
        type: 'input',
        name: 'contributions',
        message: "What are the contribution guidelines?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "What tests should be in place?"
    },
    {
        type: 'input',
        name: 'github',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
];



// TODO: Create a function to write README file
function writeToFile(data) {
    let format = generateMarkdown(data);
    //naming the destination file
    const fileName = ("./utils/README.md");
    // write a file using fileName^, stringify the data, check for errors
    fs.writeFile(fileName, format, (err) => {
        err ? console.error(err) : console.log("success!")
    });

}

// TODO: Create a function to initialize app
function init() {

    //module to guide user input
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);

            
            //call back function
            writeToFile(data);
        });
};

// Function call to initialize app
init();
