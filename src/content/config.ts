import { defineCollection, z } from "astro:content";

const galleryCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    alt: z.string(),
    date: z.date(),
    order: z.number(),
    width: z.number(),
    height: z.number(),
  }),
});

export const collections = {
  enigmas: galleryCollection,
  portraits: galleryCollection,
  people: galleryCollection,
  "holy-joe": galleryCollection,
  landscapes: galleryCollection,
  botanicals: galleryCollection,
  street: galleryCollection,
  surreal: galleryCollection,
  "2004-dnc": galleryCollection,
};
