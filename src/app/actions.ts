'use server';

import { suggestTags } from '@/ai/flows/suggest-tags';
import { z } from 'zod';

const SuggestTagsActionSchema = z.object({
  text: z.string().min(50, 'Please provide at least 50 characters of text.'),
});

interface SuggestTagsState {
  tags?: string[];
  error?: string;
}

export async function handleSuggestTags(
  prevState: SuggestTagsState,
  formData: FormData
): Promise<SuggestTagsState> {
  const text = formData.get('text') as string;

  const validatedFields = SuggestTagsActionSchema.safeParse({ text });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.text?.join(', '),
    };
  }

  try {
    const result = await suggestTags({ text });
    return { tags: result.tags };
  } catch (e) {
    return { error: 'An error occurred while suggesting tags. Please try again.' };
  }
}
