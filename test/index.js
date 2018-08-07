const should = require('should');

const zapier = require('zapier-platform-core');

const App = require('../index');
const appTester = zapier.createAppTester(App);

describe('My App', () => {
         
         it('should load requests', (done) => {
            const bundle = {};
            
            appTester(App.triggers.request.operation.perform, bundle)
            .then(results => {
                  should(results.length).above(1);
                  
                  const firstResult = results[0];
                  console.log('test result: ', firstResult)
                  should(firstResult.subject).eql('name 1');
                  should(firstResult.description).eql('directions 1');
                  
                  done();
                  })
            .catch(done);
            });
       
         it('should load bundles', (done) => {
            const bundle = {};
            
            appTester(App.triggers.bundle.operation.perform, bundle)
            .then(results => {
                  should(results.length).above(1);
                  
                  const firstResult = results[0];
                  console.log('test result: ', firstResult)
                  should(firstResult.bundlename).eql('name 1');
                  
                  done();
                  })
            .catch(done);
            });
         it('should load projects', (done) => {
            const bundle = {};
            
            appTester(App.triggers.project.operation.perform, bundle)
            .then(results => {
                  should(results.length).above(1);
                  
                  const firstResult = results[0];
                  console.log('test result: ', firstResult)
                  should(firstResult.projectname).eql('name 1');
                  
                  done();
                  })
            .catch(done);
            });
         
         
         });
