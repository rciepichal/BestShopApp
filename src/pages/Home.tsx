import { useState } from 'react';
import AboutSection from '../components/home/AboutSection';
import HeroBanner from '../components/home/HeroBanner';
import NewestProducts from '../components/home/NewestProducts';
import SingleProductTile from '../components/home/SingleProductTile';
import { Product } from '../shared/models';

const Home = () => {
  const [isOnSale, setisOnSale] = useState(true);
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <NewestProducts />
    </>
  );
};

export default Home;
