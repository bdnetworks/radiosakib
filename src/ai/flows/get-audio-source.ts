
// This file uses server-side code.
'use server';

/**
 * @fileOverview Retrieves the audio stream source for the radio player.
 *
 * This flow is designed to fetch the currently active audio stream URL.
 * In a real-world scenario, this could involve fetching from a database
 * or a configuration service, allowing the stream URL to be changed dynamically
 * without deploying new code.
 *
 * - `getAudioSource` - The main function to get the audio stream URL.
 * - `AudioSourceOutput` - The output type, containing the stream URL.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { getRadioData } from '@/lib/data';

/**
 * Output schema for the audio source flow.
 */
const AudioSourceOutputSchema = z.object({
  url: z.string().url().describe('The URL of the audio stream.'),
});
export type AudioSourceOutput = z.infer<typeof AudioSourceOutputSchema>;

/**
 * Main function to get the audio source.
 * @returns A promise that resolves to an object containing the audio stream URL.
 */
export async function getAudioSource(): Promise<AudioSourceOutput> {
  return getAudioSourceFlow();
}

/**
 * Genkit flow to retrieve the audio source.
 * 
 * For now, this returns a static URL. In a real application, you could
 * replace this with a database call or an API request to a CMS to make
 * the stream URL configurable.
 */
const getAudioSourceFlow = ai.defineFlow(
  {
    name: 'getAudioSourceFlow',
    outputSchema: AudioSourceOutputSchema,
  },
  async () => {
    // Data is now fetched from a central JSON file.
    const radioData = getRadioData();
    return {
        url: radioData.streamUrl
    };
  }
);
