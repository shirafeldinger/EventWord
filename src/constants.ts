export const WORD_LENGTH = 5;

export const KEYBOARD_ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACK'],
];

// Action listener event names
export enum ActionListenerEvent {
  CHAR_CLICK = 'CHAR_CLICK',
  BACKSPACE = 'BACKSPACE',
  ENTER = 'ENTER',
}

// Special key identifiers
export const KEY_ENTER = 'ENTER';
export const KEY_BACK = 'BACK';

// External API endpoint
export const DICTIONARY_API_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
