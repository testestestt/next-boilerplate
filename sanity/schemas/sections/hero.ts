import { defineField, defineType } from "sanity";

export default defineType({
    name: "hero",
    title: "Hero",
    type: "object",
    fields: [
      defineField({ name: "title", type: "string" }),
    ],
    preview: {
      select: {
        title: "title",
        subtitle: "_type", 
      },
    },
  });