import React from 'react';
import { useState } from 'react';
import AddFood from './Admin/AddFood/AddFood';
import FoodList from './Admin/FoodList/FoodList';
import Sidebar from './Admin/Sidebar/Sidebar';

const Dashboard = () => {
  const [active, setActive] = useState('1');
  const handleClick = (e) => {
    setActive(e.key);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 p-3">
          <Sidebar handleClick={handleClick}></Sidebar>
        </div>
        <div className="col-md-9 p-3">
          {active === '1' ? <AddFood /> : active === '2' ? <FoodList /> : ''}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
