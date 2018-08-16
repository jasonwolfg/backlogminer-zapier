const createAccount = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://{{bundle.authData.subdomain}}.backlogminer.com/accounts/upsert.json`,
    body: ({
      accountname: bundle.inputData.accountname,
      rating_weight: bundle.inputData.rating_weight,
      archived: bundle.inputData.archived,
      account_external_system: bundle.inputData.account_external_system,
      account_external_id: bundle.inputData.account_external_id
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
      {key: 'archived', label:'Archive', required: false},
      {key: 'account_external_system', label:'External System', required: false},
      {key: 'account_external_id', label:'External ID', required: false}
    ],
    perform: createAccount
  }
};
