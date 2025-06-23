import type { Dispatch, SetStateAction } from 'react';
import { DICTIONARY_API_URL } from '../constants';

export async function isValidWord(
  word: string,
  setStatusMessage: Dispatch<SetStateAction<string | null>>,
): Promise<boolean> {
  try {
    setStatusMessage('Checking word...');
    const response = await fetch(`${DICTIONARY_API_URL}${word}`);
    return response.ok;
  } catch (error) {
    console.error('Word validation failed:', error);
    return false;
  } finally {
    setStatusMessage(null);
  }
}
