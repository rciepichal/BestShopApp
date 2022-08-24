import { ThemeProvider } from '@emotion/react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Home from './pages/Home';
import Order from './pages/Order';
import Products from './pages/Products';
import SingleProduct from './pages/SingleProduct';
import { calculateTotals } from './shared/features/cart/cartSlice';
import { theme } from './shared/mui-themes/themes';
import { useAppDispatch, useAppSelector } from './shared/utils/hooks';

const App = () => {
  const { cartItems } = useAppSelector((store) => store.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<SingleProduct />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
