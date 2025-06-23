import { MyActionListener } from './utils/MyActionListener';
import { KEY_ENTER, KEY_BACK, ActionListenerEvent } from './constants';
import { Keyboard } from './components/Keyboard/Keyboard';
import styles from './App.module.css';
import { InputContainer } from './components/Input/InputContainer';

const actionListenerUI = new MyActionListener<string>();

export default function App() {
  const handleKeyClick = (key: string) => {
    if (key === KEY_ENTER) return actionListenerUI.emit(ActionListenerEvent.ENTER, '');
    if (key === KEY_BACK) return actionListenerUI.emit(ActionListenerEvent.BACKSPACE, '');
    return actionListenerUI.emit(ActionListenerEvent.CHAR_CLICK, key);
  };

  return (
    <div className={styles.appContainer}>
      <InputContainer actionListenerUI={actionListenerUI} />
      <Keyboard onKeyClick={handleKeyClick} />
    </div>
  );
}
