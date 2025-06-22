import { KEYBOARD_ROWS, KEY_ENTER, KEY_BACK } from '../constants';
import styles from '../App.module.css';

interface KeyboardProps {
  onKeyClick: (key: string) => void;
}

export function Keyboard({ onKeyClick }: KeyboardProps) {
  return (
    <div className={styles.keyboardContainer}>
      {KEYBOARD_ROWS.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.keyboardRow}>
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyClick(key)}
              className={`${styles.keyboardButton} ${
                key === KEY_ENTER || key === KEY_BACK ? styles.wide : ''
              }`}
            >
              {key === KEY_BACK ? '⌫' : key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
