const createRequest = (z, bundle) => {
  const responsePromise = z.request({
    method: 'POST',
    url: `https://{{bundle.authData.subdomain}}.backlogminer.com/requests.json`,
    body: JSON.stringify({
      title: bundle.inputData.title
    })
  });
  return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
  key: 'request',
  noun: 'Request',

  display: {
    label: 'Create Request',
    description: 'Creates a Request.'
  },

  operation: {
    inputFields: [
      {key: 'subject', label:'Subject', required: true},
      {key: 'description', label:'Description', required: true},
      {key: 'externalid', label:'External ID', required: false},
      {key: 'externalsystem', label:'External System', required: false},
      {key: 'release', label:'Release', required: false},
      {key: 'active', label:'Active', required: false},
      {key: 'statusname', label:'Status', required: false},
      {key: 'priorityname', label:'Priority', required: false},
      {key: 'requestcategoryname', label:'Request Category', required: false},
      {key: 'externallink', label:'External Link', required: false}
    ],
    perform: createRequest
  }
};
