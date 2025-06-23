import type { Dispatch, SetStateAction } from 'react';
import { DICTIONARY_API_URL } from '../constants';

export async function isValidWord(
  word: string,
  statusMessage: Dispatch<SetStateAction<string | null>>,
): Promise<boolean> {
  try {
    statusMessage('is checking word');
    const response = await fetch(`${DICTIONARY_API_URL}${word}`);
    return response.ok;
  } catch (error) {
    console.error('Word validation failed:', error);
    return false;
  } finally {
    statusMessage(null);
  }
}
