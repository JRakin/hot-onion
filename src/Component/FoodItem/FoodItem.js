import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
  const food = props.item;
  return (
    <div className="col-md-4 mb-5 food-item-card">
      <div className="text-center">
        <img className="w-100" src={food.image} alt="" />
        <p
          className="mb-0 mt-2"
          style={{ fontSize: '24px', fontWeight: '700' }}
        >
          {food.title}
        </p>
        <p className="mb-2" style={{ fontSize: '18px' }}>
          {food.subTitle}
        </p>
        <h4>${food.price}</h4>
      </div>
    </div>
  );
};

export default FoodItem;
