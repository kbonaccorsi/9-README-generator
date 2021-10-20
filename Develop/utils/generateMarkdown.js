const mitLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const iscLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
const iplLicense = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  
  if
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
      *[installation](#description)
      *[usage](#usage)
      *[license](#license)
      *[contributing](#contributing)
      *[tests](#tests)
      *[questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.installation}

## License
${data.license}

## Contributing
${data.contributions}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}](https://github.com/${data.github})
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
