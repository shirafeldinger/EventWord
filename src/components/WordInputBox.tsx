import { wordInputBoxBaseStyle } from '../styles';

interface WordInputBoxProps {
  value: string;
  status: 'success' | 'error' | null;
}

export function WordInputBox({ value, status }: WordInputBoxProps) {
  const borderColor = status === 'success' ? 'green' : status === 'error' ? 'red' : 'black';
  return (
    <div
      style={{
        ...wordInputBoxBaseStyle,
        border: `2px solid ${borderColor}`,
      }}
    >
      {value}
    </div>
  );
}
