import React, { useContext, useState } from 'react';
import Particles from 'react-particles-js';
import './Login.css';
import LogoPic from '../../Image/logo2.png';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserLock } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Swal from 'sweetalert2';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
library.add(faGoogle);

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const [newUser, setNewUser] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const provider = new firebase.auth.GoogleAuthProvider();

  const handleSignInWithGoogle = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const signedInUser = {
          name: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
          isLoggedIn: true,
        };
        setLoggedInUser(signedInUser);
      })
      .catch((err) => {
        Swal.fire(
          'Sorry',
          'Something went wrong please try again later!',
          'warning'
        );
      });
  };

  const onSubmit = (data) => {};

  return (
    <div className="login">
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#b6b2b2',
              },
            },
            opacity: {
              value: 0.5211089197812949,
              random: false,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 8.017060304327615,
              random: true,
              anim: {
                enable: true,
                speed: 12.181158184520175,
                size_min: 0.1,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: '#c8c8c8',
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: 'none',
              random: false,
              straight: false,
              out_mode: 'bounce',
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: false,
                mode: 'repulse',
              },
              onclick: {
                enable: false,
                mode: 'push',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <div className="container">
          <div className="form-container">
            <div className="logo-body text-center">
              <Link to="/">
                <img src={LogoPic} alt="logo" />
              </Link>
            </div>

            {newUser ? (
              <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    name="name"
                    ref={register({ required: true })}
                    placeholder="Your Name"
                  />

                  {errors.name && (
                    <span className="warning">Name is required</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    ref={register({ required: true })}
                    placeholder="Your Email"
                  />

                  {errors.email && (
                    <span className="warning">Email is required</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    ref={register({ required: true })}
                    placeholder="Password"
                  />

                  {errors.password && (
                    <span className="warning">Password is required</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="confirmPassword"
                    ref={register({ required: true })}
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword && (
                    <span className="warning">
                      Confirm password is required
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn btn-block sign-btn" type="submit">
                    <FontAwesomeIcon
                      style={{ fontSize: '15px', marginRight: '3px' }}
                      icon={faUserLock}
                    />
                    Sign up
                  </button>
                </div>
                <div className="text-center">
                  <label
                    onClick={() => setNewUser(false)}
                    style={{ color: 'red', cursor: 'pointer' }}
                  >
                    Already Have an account?
                  </label>
                </div>
              </form>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="py-4">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    name="userEmail"
                    ref={register({ required: true })}
                    placeholder="Email"
                  />
                  {errors.userEmail && (
                    <span className="warning">Email is required</span>
                  )}
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    name="userPassword"
                    ref={register({ required: true })}
                    placeholder="Password"
                  />
                  {errors.userPassword && (
                    <span className="warning">Password is required</span>
                  )}
                </div>
                <div className="form-group">
                  <button className="btn btn-block sign-btn" type="submit">
                    <FontAwesomeIcon
                      style={{ fontSize: '15px', marginRight: '3px' }}
                      icon={faUserLock}
                    />
                    Sign in
                  </button>
                </div>
                <div className="text-center">
                  <label
                    onClick={() => setNewUser(true)}
                    style={{ color: 'red', cursor: 'pointer' }}
                  >
                    Not Registered Yet?
                  </label>
                </div>
              </form>
            )}
          </div>
          <div className="other-login">
            <button
              onClick={handleSignInWithGoogle}
              className="btn btn-block sign-btn"
            >
              <FontAwesomeIcon
                style={{ marginRight: '4px', color: '' }}
                icon={['fab', 'google']}
              />
              Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
