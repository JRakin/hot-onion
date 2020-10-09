import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData/foods';
import './FoodItemDetails.css';

const FoodItemDetails = () => {
  const { id } = useParams();

  const foodItem = fakeData.find((item) => item.id === id);

  return (
    <div className="food-details">
      <div className="container">
        <div className="row m-5">
          <div className="col-md-6">
            <div className="p-4">
              <h3>{foodItem.title}</h3>
              <p style={{ textAlign: 'justify' }}>{foodItem.description}</p>
              <div>
                <button className="btn add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4">
              <img className="w-100" src={foodItem.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItemDetails;
