
function generateMarkdown(data) {
  return `# ${data.title}

  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-brightgreen.svg)](https://opensource.org/licenses/${data.license}/)
  
  ## Description
  ${data.description}
  
  ## Table of Contents
      [installation](#installation)
      [usage](#usage)
      [license](#license)
      [contributing](#contributing)
      [tests](#tests)
      [questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

## License
This application is covered by the ${data.license} license.

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
