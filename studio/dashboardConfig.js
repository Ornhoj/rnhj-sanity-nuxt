export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'rnhj-sanity-nuxt-studio',
                  apiId: 'e5f9cd13-8853-47f5-ae0f-89a02ce244be'
                },
                {
                  buildHookId: '5f5e606ca9ea4d23f5e47651',
                  title: 'Events Website',
                  name: 'rnhj-sanity-nuxt',
                  apiId: '82a47813-180f-4577-a572-15ae99230ef1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ornhoj/rnhj-sanity-nuxt',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://rnhj-sanity-nuxt.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
