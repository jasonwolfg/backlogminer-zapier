

'use strict';

const authentication = {
type: 'basic',
fields: [
         {key: 'subdomain', type: 'string',required: true}
         ],
test: {
url: 'https://backlogminer.com/users.json'
},
connectionLabel: '{{bundle.authData.subdomain}}'
};

module.exports = authentication;

                        
                        
                        
                        
                        
                        

