import React, { useEffect, useState } from "react";
import "./pd.css";
import EmptyData from "./EmptyData";
import { previewUser, deleteUser } from "../Slices/userDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./Popup";
import { Route, useNavigate } from "react-router";
function PreviewData() {
  // after getting data from frontend to backend and again send it to backend to frontend
  // we're gone use useSelector() hook for it
  const [id, setId] = useState();
  const [mdata, setmData] = useState(false);
  const [fdata, setfData] = useState(false);
  const [allUser, setAllUser] = useState(false);
  const [view, setView] = useState(false);
  const { users, loading } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    // why dispatch ? :- collect data from frontend and pass and show data
    dispatch(previewUser());
  }, []);

  if (loading) {
    return <h1>Preparing For Data ...</h1>;
  }
  if (users.length === 0) {
    return <EmptyData />;
  }
  const handleMaleData = () => {
    setmData(true);
    setfData(false);
    setAllUser(false);
  };
  const handleFemaleData = () => {
    setfData(true);
    setmData(false);
    setAllUser(false);
  };
  function handleAllUser() {
    setAllUser(true);
    setmData(false);
    setfData(false);
  }

  return (
    <>
      <div>
        {view && <Popup id={id} setView={setView} view={view} />}
        <div className="myContainer">
          <div className="btnPosition">
          <button onClick={handleMaleData}>Male User Data</button>
          <button onClick={handleFemaleData}>Female User Data</button>
          <button onClick={handleAllUser}>All User</button>
          </div>
          <h2>Your Data:</h2>
          {users &&
            users
              .filter((ele) => {
                if (mdata) {
                  return ele.gender === "Male";
                } else if (fdata) {
                  return ele.gender === "Female";
                } else if (allUser) {
                  return ele;
                }
              })
              .map((data) => (
                <div className="card w-50">
                  <div className="card-body">
                    <h5 className="card-title">{data.name}</h5>
                    <h5 className="card-title">{data.email}</h5>
                    <h5 className="card-title">{data.age}</h5>
                    <h5 className="card-title">{data.gender}</h5>
                    <button
                      className="card-link"
                      onClick={() => [setId(data.id), setView(true)]}
                    >
                      View User
                    </button>
                    <button
                      className="card-link"
                      onClick={() => navigate(`/edit/${data.id}`)}
                    >
                      Edit User
                    </button>
                    <button
                      className="card-link"
                      onClick={() => dispatch(deleteUser(data.id))}
                    >
                      Delete User
                    </button>
                    <button className="card-link" onClick={() => navigate("/")}>
                      Create More User
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
}

export default PreviewData;
