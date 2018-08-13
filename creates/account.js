const createAccount = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://{{bundle.authData.subdomain}}.backlogminer.com/accounts.json`,
    body: ({
      accountname: bundle.inputData.accountname,
      rating_weight: bundle.inputData.rating_weight,
      archived: bundle.inputData.archived
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'account',
  noun: 'Account',

  display: {
    label: 'Create Account',
    description: 'Creates an Account.'
  },

  operation: {
    inputFields: [
      {key: 'accountname', label:'Account', required: true},
      {key: 'rating_weight', label:'Weight', required: false},
      {key: 'archived', label:'Archive', required: false}
    ],
    perform: createAccount
  }
};
