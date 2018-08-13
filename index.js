// We can roll up all our behaviors in an App.
const authentication = require('./authentication');
const requestTrigger = require('./triggers/request');
const bundleTrigger = require('./triggers/bundle');
const projectTrigger = require('./triggers/project');
const requestCreate = require('./creates/request');

const App = {
  // This is just shorthand to reference the installed dependencies you have. Zapier will
  // need to know these before we can upload
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

authentication: authentication,
    
  // beforeRequest & afterResponse are optional hooks into the provided HTTP client
  beforeRequest: [
    
  ],

  afterResponse: [
  ],

  // If you want to define optional resources to simplify creation of triggers, searches, creates - do that here!
  resources: {
  },

  // If you want your trigger to show up, you better include it here!
  triggers: {
      [requestTrigger.key]: requestTrigger,
      [bundleTrigger.key]: bundleTrigger,
      [projectTrigger.key]: projectTrigger
  },

  // If you want your searches to show up, you better include it here!
  searches: {
  },

  // If you want your creates to show up, you better include it here!
  creates: {
      [requestCreate.key]: requestCreate,
  }
};

// Finally, export the app.
module.exports = App;
