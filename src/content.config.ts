import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
      titulo: z.string(),
      descricao: z.string().max(170),
      data: z.coerce.date(),
      foto: z.string().optional(), // nome do arquivo em src/assets (sem extensão)
      rascunho: z.boolean().default(false),
    }),
});

export const collections = { blog };
