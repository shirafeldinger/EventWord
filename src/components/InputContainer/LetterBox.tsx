import { Status, statusColors } from '../../constants';
import styles from '../InputContainer/InputContainer.module.css';
interface LetterBoxProps {
  letter: string;
  status: Status;
  isLoading?: boolean;
}

export function LetterBox({ letter, status, isLoading }: LetterBoxProps) {
  const borderColor = statusColors[status as keyof typeof statusColors] || statusColors.default;

  return (
    <div
      className={`${styles.wordInputBox} ${isLoading ? styles.loading : ''}`}
      style={{ border: `2px solid ${borderColor}` }}
    >
      {letter}
    </div>
  );
}
