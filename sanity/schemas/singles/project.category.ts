import { KeyedObject, defineField, defineType } from 'sanity'

export default defineType({
	name: "project.category",
    title: "Project Category",
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			type: 'internationalizedArrayString',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'slug',
			type: 'slug',
			options: {
				// @ts-ignore
				source: (doc) => doc.title.find((v) => v._key === 'en')?.value || doc.title.find((v) => v._key === 'es')?.value,
				maxLength: 96,
			},
			validation: (Rule) => Rule.required(),
		}),
	],
	preview: {
		select: {
		  title: 'title',
		},
		prepare(selection) {
		  const { title } = selection;
		  const titleEn = title?.find((v:KeyedObject) => v._key === 'en')?.value;
		  const titleEs = title?.find((v:KeyedObject) => v._key === 'es')?.value;
		  return {
			title: titleEn || titleEs || 'Untitled',
		  };
		},
	},
})
