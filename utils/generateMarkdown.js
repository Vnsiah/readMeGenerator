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
