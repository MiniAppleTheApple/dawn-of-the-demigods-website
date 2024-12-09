import { z, defineCollection } from 'astro:content';

const cardCollection = defineCollection({
  schema: z.object({
    type: z.string(),
    draft: z.boolean().default(false),
    name: z.string(),
    stats: z.object({
      atk: z.number(),
      def: z.number(),
    }),
    elements: z.array(z.string()),
    cost: z.object({
      summon: z.number(),
      evo: z.nullable(z.number()),
    }),
    tags: z.array(z.string()),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

export const collections = {
  'cards': cardCollection,
};
