import { Status, statusColors } from '../../constants';
import styles from '../Input/Input.module.css';
interface LetterBoxProps {
  letter: string;
  status: Status;
  statusMessage: string | null;
}

export function LetterBox({ letter, status, statusMessage }: LetterBoxProps) {
  const borderColor = statusColors[status as keyof typeof statusColors] || statusColors.default;

  return (
    <div
      className={`${styles.wordInputBox} ${statusMessage ? styles.loading : ''}`}
      style={{ border: `2px solid ${borderColor}` }}
    >
      {letter}
    </div>
  );
}
