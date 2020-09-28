import React, { useState } from 'react';
import './Login.css';
import LogoPic from '../../Image/logo2.png';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [newUser, setNewUser] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="logo text-center">
          <img src={LogoPic} alt="logo" />
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

              {errors.name && <span className="warning">Name is required</span>}
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
                <span className="warning">Confirm password is required</span>
              )}
            </div>
            <div className="form-group">
              <button className="btn btn-block sign-btn" type="submit">
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
    </div>
  );
};

export default Login;
