import { useState } from 'react';
import AboutSection from '../components/home/AboutSection';
import HeroBanner from '../components/home/HeroBanner';
import SingleProductTile from '../components/home/SingleProductTile';
import { Product } from '../shared/models';

const testProduct: Product = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};

const Home = () => {
  const [isOnSale, setisOnSale] = useState(true);
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <SingleProductTile product={testProduct} isOnSale={isOnSale} />
    </>
  );
};

export default Home;
