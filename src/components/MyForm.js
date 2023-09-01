import React, { useState } from "react";
import "./myform.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import PreviewData from "./PreviewData";
import { createUser } from "../Slices/userDetailsSlice";
function MyForm() {
  const [users, setUsers] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // The data is coming from what ever is input we're give to user
  const getUserData = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  };
  const count = 0;
  // we take data from user(frontend) and give it to backend(our api in this case) || we add one user in this case
  // so what ever data coming from users we directly pass this data to createUser Function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(users));
    navigate("/pd");
  };

  return (
    <div>
      <h1>Enter the data :</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={getUserData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="password"
            name="name"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="password"
            name="age"
            className="form-control"
            onChange={getUserData}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Gender:</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            onChange={getUserData}
          />
          <h2>
            <label for="Male">MALE</label>
          </h2>
          <br />
          <input
            type="radio"
            id="female"
            name="gender"
            value="Female"
            onChange={getUserData}
          />
          <h2>
            <label for="Female">FEMALE</label>
          </h2>
          <br />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MyForm;
