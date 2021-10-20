//modules to be used throughout application
const inquirer = require("inquirer");
const fs = require("fs");

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
        name: 'test',
        message: "What tests should be in place?"
    },
    {
        type: 'input',
        name: 'GitHub',
        message: "What is your GitHub username?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?"
    },
];

const readmeTitle = questions.title;
const description = questions.description;
const installation = questions.installation;
const usage = questions.usage;
const license = questions.license;
const contributions = questions.contributions;
const test = questions.test;
const github = questions.github;
const email = questions.email

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {

    //module to guide user input
    inquirer.prompt(questions)
        .then((data) => {
            console.log(data);

            const fileName = ("README.md");
            fs.writeFile(fileName, JSON.stringify(data, null, "\n"), (err) => {
                err ? console.error(err) : console.log("success!")
            });
            writeToFile(fileName, data);
        });
};

// Function call to initialize app
init();
