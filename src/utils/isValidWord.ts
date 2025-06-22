import { DICTIONARY_API_URL } from '../constants';

export async function isValidWord(word: string): Promise<boolean> {
  try {
    const response = await fetch(`${DICTIONARY_API_URL}${word}`);
    return response.ok;
  } catch (error) {
    console.error('Word validation failed:', error);
    return false;
  }
}
