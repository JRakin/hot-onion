import React from 'react';
import './Footer.css';
import Logo from '../../Image/logo2.png';

const Footer = () => {
  return (
    <section className="footer-container py-5">
      <div className="row p-4">
        <div className="col-md-6 p-3">
          <img className="w-25" src={Logo} alt="" />
        </div>
        <div className="col-md-3 p-3 extra-features">
          <ul>
            <li>Our Blog</li>
            <li>About Online Food</li>
            <li>Our Delivery Process</li>
            <li>Add Your Restaurant</li>
          </ul>
        </div>
        <div className="col-md-3 p-3 extra-features">
          <ul>
            <li>Get Help</li>
            <li>Read FAQs</li>
            <li>View All Cities</li>
            <li>Restaurants Near Me</li>
          </ul>
        </div>
      </div>
      <p className="mt-5 text-center">
        <small>&copy;Copyright {new Date().getFullYear()} Hot Onion</small>
      </p>
    </section>
  );
};

export default Footer;
