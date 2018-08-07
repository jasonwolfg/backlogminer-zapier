

const triggerRequest = (z, bundle) => {
    const responsePromise = z.request({
        method: 'GET',
        url: `https://{{bundle.authData.subdomain}}.backlogminer.com/requests/requests_export.json`,
                                      });
    return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
key: 'request',
noun: 'Request',
display: {
label: 'Get Request',
description: 'Trigger when a new request is added.'
},
operation: {
perform: triggerRequest,
sample: {
id: 1,
created_At: 1472069465,
subject: 'We need Zapier integration!!',
description: 'It is easy to do. Just check out their documentation',
requestcategoryname: 'New Feature'
}
}
};
