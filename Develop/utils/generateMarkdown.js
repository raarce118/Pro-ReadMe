const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
     if (license == "apache") {
       return "![License](https://img.shields.io/badge/License-Apache-brightgreen)"
       } else if (license == "MIT") {
       return "![License](https://img.shields.io/badge/License-MIT-brightgreen)"  
       } else if (license == "GPL") {
       return "![License](https://img.shields.io/badge/License-GBL-brightgreen)"  
       } else if (license == "BSD") {
       return "![License](https://img.shields.io/badge/License-BSD-brightgreen)"  
       } else {
       return "";
       }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license == "apache") {
  return "[Apache](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "MIT") {
  return "[MIT](https://opensource.org/licenses/MIT)"  
  } else if (license == "GPL") {
  return "[GPL](https://www.gnu.org/licenses/gpl-3.0)"  
  } else if (license == "BSD") {
  return "[BSD](https://opensource.org/licenses/BSD-3-Clause)"  
  } else {
  return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
      if (license) {
        return 'This project is covered udner ${renderLicenseLink(license)} License.'
      } else {
        return "";
      }
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.ProjectTitle}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Test
  ${data.test}

  ## Questions
  For any further questions, please reach us at ${data.email} or contact me via github.

`;
};
