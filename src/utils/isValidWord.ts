import type { Dispatch, SetStateAction } from 'react';
import { DICTIONARY_API_URL, STATUS_MESSAGE_CHECKING, STATUS_MESSAGE_ERROR } from '../constants';

export async function isValidWord(
  word: string,
  setStatusMessage: Dispatch<SetStateAction<string | null>>,
): Promise<boolean> {
  try {
    setStatusMessage(STATUS_MESSAGE_CHECKING);
    const response = await fetch(`${DICTIONARY_API_URL}${word}`);
    return response.ok;
  } catch (error) {
    console.error(STATUS_MESSAGE_ERROR, error);
    return false;
  } finally {
    setStatusMessage(null);
  }
}
