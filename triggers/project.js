

const triggerProject = (z, bundle) => {
    const responsePromise = z.request({
        method: 'GET',
        url: `https://{{bundle.authData.subdomain}}.backlogminer.com/projects/projects_export.json`,
                                      });
    return responsePromise
    .then(response => JSON.parse(response.content));
};

module.exports = {
key: 'project',
noun: 'Project',
display: {
label: 'Get Project',
description: 'Trigger when a new project is added.'
},
operation: {
perform: triggerProject,
sample: {
id: 1,
created_At: 1472069465,
bundlename: 'Complete Zapier Integration',
archived: 'false'
}
}
};
