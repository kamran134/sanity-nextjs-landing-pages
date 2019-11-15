export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dce6f6cc1e20e9a76fe585e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-bwm9t74m',
                  apiId: 'a228d5a9-9e38-46fe-bd2c-3d739a2079a9'
                },
                {
                  buildHookId: '5dce6f6c257080847bab3ecf',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hi5622yy',
                  apiId: '2f3639f4-dc08-4acb-bd15-14456679e576'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kamran134/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hi5622yy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
