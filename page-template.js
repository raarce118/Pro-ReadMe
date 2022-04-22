const pageTemplate = () => {
      return`

      # ${projectTitle}
      ${Badge}

      ## Description
      ${Description}

      ## Table of Contents
      ${Contents}
      -[Installation](#installation)
      'Usage, 'License', 'Contribution', 'Test', 'Questions'

      ## Installation
      ${Installation}

      ## Usage
      ${Usage}

      ## License
      ${License}

      ## Contribution
      ${Contribution}

      ## Test
      ${Test}

      ## Questions
      ${Questions}
      ${Email}

      `;
};

module.exports = pageTemplate;



















