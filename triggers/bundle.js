

const triggerBundle = (z, bundle) => {
    const responsePromise = z.request({
        method: 'GET',
        url: `https://{{bundle.authData.subdomain}}.backlogminer.com/bundles/bundles_export.json`,
                                      });
    return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
key: 'bundle',
noun: 'Bundle',
display: {
label: 'Get Bundle',
description: 'Trigger when a new bundle is added.'
},
operation: {
perform: triggerBundle,
sample: {
id: 1,
created_At: 1472069465,
bundlename: 'zapier, jira, hubspot, salesforce, integration',
active: 'true'
}
}
};
