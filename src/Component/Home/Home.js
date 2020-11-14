import React from 'react';
import Description from '../Description/Description';
import Food from '../Food/Food';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Search from '../Search/Search';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Food></Food>
      <Description></Description>
      <Footer></Footer>
    </div>
  );
};

export default Home;
