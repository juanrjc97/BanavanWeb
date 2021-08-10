module.exports.config = {
  framework: 'custom',
  frameworkPath: 'node_modules/protractor-cucumber-framework',
  cucumberOpts: {
    require: ['src/protractor/steps/*.steps.js']
  },
  specs: ['src/protractor/features/*.feature'],
  capabilities: {
    browserName: 'chrome',
  }
};