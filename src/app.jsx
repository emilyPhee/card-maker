import Login from './components/login/login';
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';
import CardEditor from './components/card_editor/card_editor';

function App({ authService }) {
  return (
    <div className={styles.app}>
      <>
        <Routes>
          <Route path="/" element={<Login authService={authService} />} />
          <Route path="/editor" element={<CardEditor />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
