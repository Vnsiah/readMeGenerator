import inquirer from "inquirer";
import fs from "fs/promises";
import generateReadMe from "./utils/generateMarkdown.js";




//promt the user the questions to create ReadMe.md
let makePage = () => { inquirer
  .prompt([
    {
      type: "input",
      name: "projectTitle",
      message: "What is the project title?",
  },
    
    {
      type: 'input',
      name: 'description',
      message: "write a description of your projetc:",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project usage for?"

    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?"
    },
    {
      type: "input",
      name: "tests",
      message: "Is there a test included?"
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? "
    },
    {
      type: "input",
      name: "username",
      message: "Please enter your GitHub username: "
    },
    {
      type: "input",
      name: "email",
      message: "Please enter your email: "
    },
        {
      type: 'list',
      name: 'lincense',
      message: 'what license is needed for this project?',
      choices: [
        "MIT",
        "GPL",
        "CC--0",
        "Mozilla",
        "Open"
      ],

    },

  ]).then(function (answers){
 
const template = generateReadMe(answers)
console.log(template)

fs.writeFile('./utils/sample.README.md', template, (err) =>
  err ? console.error(err) : console.log('Success!')
);

  })

}





makePage()





