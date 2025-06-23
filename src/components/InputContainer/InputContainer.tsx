import { statusColors, WORD_LENGTH } from '../../constants';
import { useWordInput } from '../../hooks/useWordInput';
import type { MyActionListener } from '../../utils/MyActionListener';
import styles from '../InputContainer/InputContainer.module.css';

interface InputContainerProps {
  actionListenerUI: MyActionListener<string>;
}

export function InputContainer({ actionListenerUI }: InputContainerProps) {
  const { letters, status, statusMessage } = useWordInput(actionListenerUI);

  const borderColor = statusColors[status as keyof typeof statusColors] || statusColors.default;

  return (
    <div className={styles.inputContainer}>
      {statusMessage && <div className={styles.statusMessage}>{statusMessage}</div>}
      <div className={styles.wordRow}>
        {[...Array(WORD_LENGTH)].map((_, i) => (
          <div
            key={i}
            className={`${styles.wordInputBox} ${statusMessage ? styles.message : ''}`}
            style={{
              border: `2px solid ${borderColor}`,
            }}
          >
            {letters[i]}
          </div>
        ))}
      </div>
    </div>
  );
}
