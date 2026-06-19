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
      scale: z.string().optional(),
      genre: z.string().optional(),
      filters: z.array(z.string()).default([]),
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
      decision: z.string().optional(),
      finalResult: z.string().optional(),
      response: z.string().optional(),
      changedOnSite: z.string().optional(),
      whatChangedOnSite: z.string().optional(),
      stayedConsistent: z.string().optional(),
      productionContext: z.string().optional(),
      venueContext: z.string().optional(),
      systemWorkflow: z.string().optional(),
      constraint: z.string().optional(),
      solution: z.string().optional(),
      outcome: z.string().optional(),
      credits: z.string().optional(),
      mediaCredits: z.string().optional(),
      lightStates: z
        .array(
          z.object({
            label: z.string(),
            image: image().optional(),
            alt: z.string().optional(),
            caption: z.string().optional(),
          })
        )
        .default([]),
      mediaItems: z
        .array(
          z.object({
            label: z.string(),
            detail: z.string(),
            credit: z.string().optional(),
          })
        )
        .default([]),
      relatedServices: z
        .array(
          z.object({
            label: z.string(),
            href: z.string(),
          })
        )
        .default([]),
      selectedProjects: z.array(z.string()).default([]),
      published: z.boolean().default(true),
      publishable: z.boolean().default(true),
    }),
});

export const collections = { portfolio };
