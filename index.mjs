import inquirer from "inquirer";
import fs from "fs/promises";
// import generateMarkdown from "./utils/generateMarkdown"




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
        "GNU",
        "ISC",
        "Mozilla",
        "Open"
      ],

      filter(val) {
        return val.toLowerCase();
      },

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


// let readmeText = `# Project Description
//     ${description}
    
//     ## The second largest heading

//     ${generateLicense(size)}


//     ###### The smallest heading
    
//     `
// fs.writeFile("README.md", readmeText)

// function generateLicense(license) {

//   if (license === "Jumbo") {

//     return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
//   }


// }


