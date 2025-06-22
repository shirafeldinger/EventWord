import { useWordInput } from './hooks/useWordInput';
import { MyActionListener } from './utils/MyActionListener';
import {
  KEYBOARD_ROWS,
  WORD_LENGTH,
  LISTENER_CHAR_CLICK,
  LISTENER_BACKSPACE,
  LISTENER_ENTER,
} from './constants';
import { WordInputBox } from './components/WordInputBox';
import {
  appContainerStyle,
  wordRowContainerStyle,
  keyboardContainerStyle,
  keyboardRowStyle,
  keyboardButtonBaseStyle,
} from './styles';

const actionListenerUI = new MyActionListener();

export default function App() {
  const { letters, status } = useWordInput(actionListenerUI);

  const handleKeyClick = (key: string) => {
    if (key === 'ENTER') actionListenerUI.emit(LISTENER_ENTER, null);
    else if (key === 'BACK') actionListenerUI.emit(LISTENER_BACKSPACE, null);
    else actionListenerUI.emit(LISTENER_CHAR_CLICK, key);
  };

  return (
    <div style={appContainerStyle}>
      <div style={wordRowContainerStyle}>
        {[...Array(WORD_LENGTH)].map((_, i) => (
          <WordInputBox key={i} value={letters[i] || ''} status={status} />
        ))}
      </div>

      <div style={keyboardContainerStyle}>
        {KEYBOARD_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} style={keyboardRowStyle}>
            {row.map((key) => (
              <button
                key={key}
                onClick={() => handleKeyClick(key)}
                style={{
                  ...keyboardButtonBaseStyle,
                  minWidth: key === 'ENTER' || key === 'BACK' ? 60 : 40,
                }}
              >
                {key === 'BACK' ? '⌫' : key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
