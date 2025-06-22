import { useEffect, useState } from 'react';
import { MyActionListener } from '../utils/MyActionListener';
import { WORD_LENGTH, LISTENER_CHAR_CLICK, LISTENER_BACKSPACE, LISTENER_ENTER } from '../constants';

export function useWordInput(actionListenerUI: MyActionListener) {
  const [letters, setLetters] = useState<string[]>([]);
  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  useEffect(() => {
    actionListenerUI.registerListener(LISTENER_CHAR_CLICK, (char: string) => {
      setStatus(null);
      setLetters((prev) => {
        if (prev.length < WORD_LENGTH) {
          return [...prev, char];
        }
        return prev;
      });
    });

    actionListenerUI.registerListener(LISTENER_BACKSPACE, () => {
      setStatus(null);
      setLetters((prev) => prev.slice(0, -1));
    });

    actionListenerUI.registerListener(LISTENER_ENTER, async () => {
      if (letters.length !== WORD_LENGTH) {
        setStatus('error');
        return;
      }
      const word = letters.join('');
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        setStatus(res.ok ? 'success' : 'error');
      } catch {
        setStatus('error');
      }
    });

    return () => {
      actionListenerUI.removeListener(LISTENER_CHAR_CLICK);
      actionListenerUI.removeListener(LISTENER_BACKSPACE);
      actionListenerUI.removeListener(LISTENER_ENTER);
    };
  }, [letters, actionListenerUI]);

  return { letters, setLetters, status, setStatus };
}
