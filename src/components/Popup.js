import React from "react";
import "./popup.css";
import { useSelector } from "react-redux";
function Popup({ id, view, setView }) {
  const allUsers = useSelector((state) => state.app.users);

  const myUser = allUsers.filter((ele) => ele.id === id);

  return (
    <div>
      <div className="mycontainer">
        <div className="module">
          <button onClick={()=>setView(false)}>Close</button>
          <h1>{myUser[0].name}</h1>
          <h1>{myUser[0].email}</h1>
          <h1>{myUser[0].age}</h1>
          <h1>{myUser[0].gender}</h1>
        </div>
      </div>
    </div>
  );
}

export default Popup;
