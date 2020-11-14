import React, { useState } from 'react';
import fakeData from '../../fakeData/foods';
import FoodItem from '../FoodItem/FoodItem';
import './Food.css';

const Food = () => {
  const [selectActive, setSelectActive] = useState('Breakfast');

  const foods = fakeData.filter((food) => food.type === selectActive);

  return (
    <section>
      <div className="container">
        <div className="my-5">
          <nav>
            <ul className="nav justify-content-center">
              <li
                onClick={() => setSelectActive('Breakfast')}
                className="nav-item"
              >
                <span
                  className={
                    selectActive === 'Breakfast'
                      ? 'active nav-link'
                      : 'nav-link'
                  }
                >
                  Breakfast
                </span>
              </li>
              <li onClick={() => setSelectActive('Lunch')} className="nav-item">
                <span
                  className={
                    selectActive === 'Lunch' ? 'active nav-link' : 'nav-link'
                  }
                >
                  Lunch
                </span>
              </li>
              <li
                onClick={() => setSelectActive('Dinner')}
                className="nav-item"
              >
                <span
                  className={
                    selectActive === 'Dinner' ? 'active nav-link' : 'nav-link'
                  }
                >
                  Dinner
                </span>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row my-4">
          {foods.map((food) => (
            <FoodItem key={food.id} item={food}></FoodItem>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Food;
