import { defineField, defineType } from 'sanity'


export default defineType({
	name: 'InternalLink',
	title: 'Internal link',
	type: 'object',
	fields: [
		defineField({
			name: 'label',
			type: 'string',
		}),
		defineField({
			name: 'internal',
			type: 'reference',
			to: [{ type: 'page' }],
		}),
	],
})
