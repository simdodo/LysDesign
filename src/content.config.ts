import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const formats = [
  "Touring",
  "Dance",
  "Festival",
  "Programming",
  "Previsualization",
  "Visual Direction",
  "Special Project",
] as const;

const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      role: z.string(),
      location: z.string(),
      year: z.string(),
      format: z.enum(formats),
      featured: z.boolean().default(false),
      order: z.number().int().default(99),
      tags: z.array(z.string()).default([]),
      systems: z.array(z.string()).default([]),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(image()).default([]),
      challenge: z.string(),
      approach: z.string(),
      result: z.string(),
      truth: z.string().optional(),
      productionProblem: z.string().optional(),
      response: z.string().optional(),
      changedOnSite: z.string().optional(),
      stayedConsistent: z.string().optional(),
      selectedProjects: z.array(z.string()).default([]),
      published: z.boolean().default(true),
    }),
});

export const collections = { portfolio };
