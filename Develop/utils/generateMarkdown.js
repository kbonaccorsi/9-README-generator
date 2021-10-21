// const mitLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
// const iscLicense = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
// const zlibLicense = "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge]("https://img.shields.io/badge/License-${data.license}-brightgreen.svg")
  
  
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
"https://opensource.org/licenses/${data.license}/"

## Contributing
${data.contributions}

## Tests
${data.tests}

## Questions
GitHub: [${data.github}]("https://github.com/${data.github}")
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
