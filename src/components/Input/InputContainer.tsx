import { WORD_LENGTH } from '../../constants';
import { useWordInput } from '../../hooks/useWordInput';
import type { MyActionListener } from '../../utils/MyActionListener';
import styles from './Input.module.css';
import { LetterBox } from './LetterBox';

interface InputContainerProps {
  actionListenerUI: MyActionListener<string>;
}

export function InputContainer({ actionListenerUI }: InputContainerProps) {
  const { letters, status, statusMessage } = useWordInput(actionListenerUI);

  return (
    <div className={styles.inputContainer}>
      {statusMessage && <div className={styles.statusMessage}>{statusMessage}</div>}

      <div className={styles.wordRow}>
        {[...Array(WORD_LENGTH)].map((_, i) => (
          <LetterBox
            key={i}
            letter={letters[i] || ''}
            status={status}
            statusMessage={statusMessage}
          />
        ))}
      </div>
    </div>
  );
}
