/** @format */

import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div>
      <div className="hero bg-white min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              This is a Coffee Store application where you can manage your
              coffee inventory, add new coffees, update existing ones, and
              delete unwanted ones. If You want to use it, at first you need to
              Sign Up. If you have an account, you can log in by clicking on the{" "}
              <Link to="/signin" className="text-red-500 font-bold underline">
                Sign In
              </Link>{" "}
              link.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  className="input"
                  name="password"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">Sign Up</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
