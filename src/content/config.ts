import { defineCollection, z } from "astro:content";

export const collections = {
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.date(),
			author: z.string(),
			image: z.object({
				url: z.string(),
				alt: z.string(),
			}),
		}),
	}),
};
