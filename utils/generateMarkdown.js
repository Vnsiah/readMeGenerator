

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

${answers.questions}<br />
<br />
Have questions about this project? 
GitHub: https://github.com/${answers.username} 
Email: ${answers.email}


_This README was generated with ❤️ by [READMeGenerator](https://github.com/Vnsiah/readMeGenerator)_

  

`;
}

module.exports = generateReadMe;
