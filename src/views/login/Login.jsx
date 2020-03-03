import React from "react";
import {Link} from "react-router-dom"

export default function Login() {
  return (
    <div className="d-flex mt-2 row">
      <form className="col-md-6">
        <h3>Sign In</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to="/login">password?</Link>
        </p>
      </form>
      <img
        src="https://pterneas.com/wp-content/uploads/2018/09/hiring-software-developers-600x403.png"
        className="col-md-6"
        alt=""
      />
    </div>
  );
}
