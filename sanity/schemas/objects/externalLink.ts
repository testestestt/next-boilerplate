import { defineField, defineType } from 'sanity'


export default defineType({
	name: 'externalLink',
	title: 'External link',
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			type: 'string',
		}),
		defineField({
			name: 'external',
			placeholder: 'https://example.com',
			type: 'url',
			validation: (Rule) =>
				Rule.uri({
					scheme: ['http', 'https', 'mailto', 'tel'],
					allowRelative: true,
				}),
		}),
        defineField({
            name: 'newTab',
            title: 'Open in new tab',
            type: 'boolean',
            initialValue: true,
        })
	],
})
