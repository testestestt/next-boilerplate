import { defineType, defineField, defineArrayMember } from "sanity";

export default defineType({
    name: "settings",
    type: "document",
    title: "Settings",
    fields: [
        defineField({ 
            name: "title", type: "string"
        }),
        defineField({
            name: 'header',
            type: 'array',
            of: [
                {
					type: 'reference',
                    name: 'internalLinkHeader',
                    title: 'Internal link',
					to: [{ type: 'page' }, { type: 'home' }, { type: 'project.post' }],
					options: {
                        filter: ({ document }) => {
                            const { language } = document
        
                            if (language) {
                                return {
                                    filter: 'language == $language',
                                    params: {
                                        language: language,
                                    },
                                }
                            }
        
                            return {}
                        },
                        disableNew: true,
					},
				},
                {   
                    name: 'externalLinkHeader',
                    type: 'externalLink',
                }
            ],
            options: {
                insertMenu: {
                  views: [
                    { name: 'list' },
                  ]
                }
            },
        }),
        defineField({
            name: 'language',
            type: 'string',
            readOnly: true,
            hidden: true,
        }),
        
    ]   
});