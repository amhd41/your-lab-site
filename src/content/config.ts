import { defineCollection, z } from "astro:content";

const people = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    bio: z.string().optional(),
    photo: z.string().optional(),
    alumni: z.boolean().default(false),
    currentAssociation: z.string().optional(),
    links: z
      .object({
        email: z.string().optional(),
        scholar: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    status: z.enum(["Active", "Completed"]).default("Active"),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    links: z.array(z.string()).optional(),
    team: z.array(z.string()).optional(),
    share_to_x: z.boolean().default(false),
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    year: z.number(),
    venue: z.string().optional(),
    link: z.string(),
    share_to_x: z.boolean().default(true),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { people, projects, publications, news };
