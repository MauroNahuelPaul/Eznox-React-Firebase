import './styles/main.scss'
import { LoginProvider } from './context/LoginContext';
import { CartProvider } from "./context/CartContext";
import { WishProvider} from './context/WishContext';
import AppRouter from './routes/AppRouter';


function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <WishProvider>
          <AppRouter />
        </WishProvider>
      </CartProvider>
    </LoginProvider >
  );
}

export default App;
