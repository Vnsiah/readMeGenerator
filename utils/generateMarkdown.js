

// function renderLicenseBadge(license) {
//   if (!license) {
//     return ``;
//   } else {
//     return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
//   }
// }

// // Returns the license link
// function renderLicenseLink(license) {
//   if (license === 'MIT') {
//     return `https://lbesson.mit-license.org/`
//   }
 
// }


// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return ``;
//   } else {
//     return `## Licenses
//     This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
//   }
// }

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
 ${answers.tests}

## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license.


## Questions
Have questions about this project?  
GitHub: https://github.com/${answers.github}  
Email: ${answers.email}


_This README was generated with ❤️ by [READMeGenerator](https://github.com/Vnsiah/readMeGenerator)_

  

`;
}

module.exports = generateReadMe;
