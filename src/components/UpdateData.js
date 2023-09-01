import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateUser } from "../Slices/userDetailsSlice";

function UpdateData() {
  const { id } = useParams();
  const [updateData, setUpdateData] = useState();
  const { users, loading } = useSelector((arg) => arg.app);
  useEffect(() => {
    if (id) {
      const editUser = users.filter((ele) => ele.id === id);
      setUpdateData(editUser[0]);
    }
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // after update the data we've to dispatch the data
    dispatch(updateUser(updateData));
    navigate("/pd");
  }
  function newData(e) {
    // this line basically similar as createUser
    // in create user  we grab the data with the help of onchange
    // that is how we do in this line as well.
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <h1>Edit the data :</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            name="email"
            value={updateData && updateData.email}
            className="form-control"
            onChange={newData}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            value={updateData && updateData.name}
            name="name"
            className="form-control"
            onChange={newData}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            value={updateData && updateData.age}
            name="age"
            className="form-control"
            onChange={newData}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Gender:</label>
          <input
            type="radio"
            id="male"
            checked={updateData && updateData.gender === "Male"}
            name="gender"
            value="Male"
            onChange={newData}
          />
          <h2>
            <label for="Male">MALE</label>
          </h2>
          <br />
          <input
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            id="female"
            name="gender"
            value="Female"
            onChange={newData}
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

export default UpdateData;
