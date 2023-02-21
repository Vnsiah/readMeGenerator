// import fs from "fs/promises";
import fs from require('fs');

function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
 
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
}

// function to generate markdown for README

function generateReadMe(answers) {
  return `# ${answers.projectTitle}

  


## Description
 ${answers.description}


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)


## Installation
 ${answers.installation}


## Usage
${answers.usage}





## Contributing
 ${answers.contributing}


## Tests
✏️ ${answers.tests}


## Questions
Have questions about this project?  
GitHub: https://github.com/${data.github}  
Email: ${answers.email}


_This README was generated with ❤️ by [readMeGenerator](https://github.com/Vnsiah/readMeGenerator)_

  

`;
}

module.exports = generateReadMe;
