import React from 'react';
import Food from '../Food/Food';
import Header from '../Header/Header';
import Search from '../Search/Search';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Search></Search>
      <Food></Food>
    </div>
  );
};

export default Home;
