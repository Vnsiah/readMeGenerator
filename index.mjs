import inquirer from "inquirer";
import fs from "fs/promises";


let {description, size} = await inquirer
    .prompt([
      {
            type: 'input',
            name: 'description',
            message: "write a description of your projetc:",
        },
        {
            type: 'list',
            name: 'size',
            message: 'what size do you need?',
            choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
            filter(val) {
              return val.toLowerCase();
         },
       },
    
    ])

    let readmeText =  `# Project Description
    ${description}
    
    ## The second largest heading

   


    ###### The smallest heading
    
    `