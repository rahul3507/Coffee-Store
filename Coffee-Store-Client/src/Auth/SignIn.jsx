/** @format */

import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              This is a Coffee Store application where you can manage your
              coffee inventory, add new coffees, update existing ones, and
              delete unwanted ones. If You want to use it, at first you need to
              login. If you don't have an account, you can create one by
              clicking on the{" "}
              <Link to="/signup" className="text-red-500 font-bold underline">
                Sign Up
              </Link>{" "}
              link.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover text-white">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
