// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const termsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lastUpdated: z.date().optional(),
  }),
});

export const collections = {
  'terms': termsCollection,
};