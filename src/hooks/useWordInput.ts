import { useEffect, useRef, useState } from 'react';
import { MyActionListener } from '../utils/MyActionListener';
import { ActionListenerEvent, WORD_LENGTH } from '../constants';
import { isValidWord } from '../utils/isValidWord';

export function useWordInput(actionListenerUI: MyActionListener<string>) {
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);
  const lettersRef = useRef(letters);

  useEffect(() => {
    lettersRef.current = letters;
  }, [letters]);

  useEffect(() => {
    const handleCharClick = (char: string) => {
      setStatus(null);
      setLetters((prev) => (prev.length < WORD_LENGTH ? [...prev, char] : prev));
    };

    const handleBackspace = () => {
      setStatus(null);
      setLetters((prev) => prev.slice(0, -1));
    };

    const handleEnter = async () => {
      const word = lettersRef.current.join('');

      if (word.length !== WORD_LENGTH) {
        setStatus('error');
        return;
      }
      const isValid = await isValidWord(word);
      setStatus(isValid ? 'success' : 'error');
    };

    actionListenerUI.registerListener(ActionListenerEvent.CHAR_CLICK, handleCharClick);
    actionListenerUI.registerListener(ActionListenerEvent.BACKSPACE, handleBackspace);
    actionListenerUI.registerListener(ActionListenerEvent.ENTER, handleEnter);

    return () => {
      actionListenerUI.removeListener(ActionListenerEvent.CHAR_CLICK);
      actionListenerUI.removeListener(ActionListenerEvent.BACKSPACE);
      actionListenerUI.removeListener(ActionListenerEvent.ENTER);
    };
  }, [actionListenerUI]);

  return { letters, setLetters, status, setStatus };
}
