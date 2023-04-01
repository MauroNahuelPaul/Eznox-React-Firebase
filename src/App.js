

import './styles/main.scss'
import { LoginProvider } from './context/LoginContext';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <LoginProvider>
      <AppRouter />
    </LoginProvider >
  );
}

export default App;
