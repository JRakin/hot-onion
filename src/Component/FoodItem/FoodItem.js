import React from 'react';
import './FoodItem.css';

const FoodItem = (props) => {
  const food = props.item;
  return (
    <div className="col-md-4">
      <div className="m-3 food-item-card">
        <div className="text-center">
          <img className="w-75 p-4" src={food.image} alt="" />
          <p
            className="mb-0 mt-2"
            style={{ fontSize: '20px', fontWeight: '600', color: 'gray' }}
          >
            {food.title}
          </p>
          <p className="mb-2" style={{ fontSize: '16px', color: 'gray' }}>
            {food.subTitle}
          </p>
          <h4 style={{ color: 'red' }}>
            {' '}
            <span style={{ fontSize: '18px' }}>$</span>
            {food.price}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
