import { defineField, defineType } from "sanity";

export default defineType({
  name: "project.post",
  title: "Project",
  type: "document",
  groups: [
    {
      name: "content",
      title: "Content",
    },
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "settings",
      title: "Settings",
    },
  ],
  fieldsets: [
    {
      name: 'seoSettings',
      title: 'SEO Settings',
      options: {
        collapsible: true,
        collapsed: true, // Set to true to make it collapsed by default
      },
    },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "settings",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      group: "content",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      group: "settings",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      group: "settings",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      group: "settings",
      of: [{ 
        type: "reference", 
        to: { type: "project.category" } }
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "block-content",
      group: "content",
    }),
    defineField({
      name: "meta_title",
      title: "Meta Title",
      type: "string",
      group: "seo",
      fieldset: 'seoSettings'
    }),
    defineField({
      name: "meta_description",
      title: "Meta Description",
      type: "text",
      group: "seo",
      fieldset: 'seoSettings',
    }),
    defineField({
      name: "noindex",
      title: "No Index",
      type: "boolean",
      initialValue: false,
      group: "seo",
      fieldset: 'seoSettings',
    }),
    defineField({
      name: "ogImage",
      title: "Open Graph Image - [1200x630]",
      type: "image",
      group: "seo",
      fieldset: 'seoSettings',
    }),
    defineField({
      name: 'language',
      type: 'string',
      readOnly: true,
      hidden: true,
    })
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "client.name",
      media: "image",
    },
  },
});
