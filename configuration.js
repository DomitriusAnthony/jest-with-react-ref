/*


This will be your reference for configuring your project with Jest (using Babel)

==========================================================================================================

! If you're using create-react-app, react-scripts bundles jest in so you do not need to do it yourself !

- npm install --save-dev jest 

- Add a test script to your package.json:

"scripts": {
    "test": "jest"
}

==========================================================================================================

- Create a babelrc.js file. (Your babel config is usually inside of a package.json)
Having it as it's own JS file allows us to do conditional checking to do things like fix 'import' errors with Jest.

In your package.json just set your babel config as follows: 

"babel": {
    "presets": "./.babelrc.js"
}

~~~~ refer to /.babelrc.js to see the configuration of babel ~~~~



- Configuring code coverage reports is as simple as adding ' --coverage ' to your "test": "jest" script. ( You can also load the coverage site that jest gives you by typing 'open coverage/lcov-report/index.html' in your terminal) 

- Setting up a jest.config.js file will allow you to make specific changes to how Jest behaves. 

module.exports = {
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock),
    },
    setupTestFrameworkScriptFile: require.resolve(./test/setup-test-framework),
    collectCoverageFrom: ['** /src/** /*.js'],                  <----- [remove spaces between * and / when using this in your project]
    coverageThreshold: {
        global: {
            statements: 18,
            branches: 10,
            functions: 19,
            lines: 18                       <--- these numbers are the minimum coverage threshold
        }
    }
}


- Adding a watch to your jest will allow jest to keep up with the changes you'll be making to git and run the tests to match. In your package.json:

"test:watch": "jest --watch"



*/