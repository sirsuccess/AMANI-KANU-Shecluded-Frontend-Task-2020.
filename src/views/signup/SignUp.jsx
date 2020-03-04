import React from "react";
import { Link } from "react-router-dom";

export default function SignUP() {
  return (
    <div className="d-flex mt-3 row">
      <img
        src="https://www.appstarsolution.com/wp-content/uploads/2019/06/hire-reactnative01.png"
        className="col-md-6"
        alt=""
      />
      <form className="col-md-6">
        <h3>Sign Up</h3>
        <div className="row">
          <div className="form-group  col-md-6">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required
            />
          </div>
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
        <Link to="/login">Already have Account? Login!</Link>
        </p>
      </form>
    </div>
  );
}
