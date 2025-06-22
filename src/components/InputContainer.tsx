import styles from '../App.module.css';
import { WORD_LENGTH } from '../constants';
import { useWordInput } from '../hooks/useWordInput';
import type { MyActionListener } from '../utils/MyActionListener';

interface InputContainerProps {
  actionListenerUI: MyActionListener<string>;
}

export function InputContainer({ actionListenerUI }: InputContainerProps) {
  const { letters, status } = useWordInput(actionListenerUI);

  const borderColor = status === 'success' ? 'green' : status === 'error' ? 'red' : 'grey';

  return (
    <div className={styles.wordRow}>
      {[...Array(WORD_LENGTH)].map((_, i) => (
        <div
          className={`${styles.wordInputBox}`}
          style={{
            border: `2px solid ${borderColor}`,
          }}
        >
          {letters[i]}
        </div>
      ))}
    </div>
  );
}
