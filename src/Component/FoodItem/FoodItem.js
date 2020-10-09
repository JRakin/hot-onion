import React from 'react';
import { useHistory } from 'react-router-dom';
import './FoodItem.css';

const FoodItem = (props) => {
  const food = props.item;
  const history = useHistory();

  const handleDetails = (id) => {
    history.push('/foodItemDetails/' + id);
  };

  return (
    <div className="col-md-4">
      <div className="m-3 food-item-card">
        <div
          onClick={() => handleDetails(food.id)}
          style={{ cursor: 'pointer' }}
          className="text-center"
        >
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
