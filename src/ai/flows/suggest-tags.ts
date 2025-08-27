// This file uses server-side code.
'use server';

/**
 * @fileOverview AI-powered tag suggestion for blog posts.
 *
 * Given a blog post's text content, this flow suggests relevant tags using GenAI.
 *
 * - `suggestTags` - The main function to generate tag suggestions.
 * - `SuggestTagsInput` - The input type for the `suggestTags` function, containing the blog post text.
 * - `SuggestTagsOutput` - The output type, which is a list of suggested tags.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

/**
 * Input schema for the tag suggestion flow.
 */
const SuggestTagsInputSchema = z.object({
  text: z
    .string()
    .describe('The text content of the blog post for which to suggest tags.'),
});
export type SuggestTagsInput = z.infer<typeof SuggestTagsInputSchema>;

/**
 * Output schema for the tag suggestion flow.
 */
const SuggestTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of suggested tags for the blog post.'),
});
export type SuggestTagsOutput = z.infer<typeof SuggestTagsOutputSchema>;

/**
 * Main function to generate tag suggestions for a given blog post.
 * @param input - The input containing the blog post text.
 * @returns A promise that resolves to an object containing an array of suggested tags.
 */
export async function suggestTags(input: SuggestTagsInput): Promise<SuggestTagsOutput> {
  return suggestTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestTagsPrompt',
  input: {schema: SuggestTagsInputSchema},
  output: {schema: SuggestTagsOutputSchema},
  prompt: `You are a tag suggestion expert for blog posts. Analyze the following text and suggest relevant tags to improve searchability.

Text: {{{text}}}

Tags:`,
});

/**
 * Genkit flow to suggest tags for a blog post.
 */
const suggestTagsFlow = ai.defineFlow(
  {
    name: 'suggestTagsFlow',
    inputSchema: SuggestTagsInputSchema,
    outputSchema: SuggestTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

