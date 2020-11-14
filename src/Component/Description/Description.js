import React from 'react';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Description.css';

const Description = () => {
  return (
    <section className="p-3" style={{ backgroundColor: '#eeeeee' }}>
      <div className="container">
        <div className="pt-4 text-center">
          <h1 style={{ color: '#28df99' }}>Why Choose Us?</h1>
        </div>
        <div className="row mt-4 pt-4">
          <div className="col-md-4 p-3">
            <div className="description-card p-2">
              <img
                className="w-100 p-3"
                src="https://i.ibb.co/1nLxwFX/adult-blur-blurred-background-687824.png"
                alt=""
              />
              <div className="mt-4">
                <p className="px-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn-see text-center p-3">
                  See more{' '}
                  <span>
                    <FontAwesomeIcon
                      style={{
                        color: '#28df99',
                        fontSize: '26px',
                        paddingTop: '8px',
                      }}
                      icon={faAngleDoubleRight}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="description-card p-2">
              <img
                className="w-100 p-3"
                src="https://i.ibb.co/cXpDCSD/chef-cook-food-33614.png"
                alt=""
              />
              <div className="mt-4">
                <p className="px-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn-see text-center p-3">
                  See more{' '}
                  <span>
                    <FontAwesomeIcon
                      style={{
                        color: '#28df99',
                        fontSize: '26px',
                        paddingTop: '8px',
                      }}
                      icon={faAngleDoubleRight}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="description-card p-2">
              <img
                className="w-100 p-3"
                src="https://i.ibb.co/3F1t8Bc/architecture-building-city-2047397.png"
                alt=""
              />
              <div className="mt-4">
                <p className="px-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <button className="btn-see text-center p-3">
                  See more{' '}
                  <span>
                    <FontAwesomeIcon
                      style={{
                        color: '#28df99',
                        fontSize: '26px',
                        paddingTop: '8px',
                      }}
                      icon={faAngleDoubleRight}
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
