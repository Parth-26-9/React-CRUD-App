import React from "react";
import "./emptydata.css";
import { useNavigate } from "react-router";
function EmptyData() {
  const navigate = useNavigate()
  return (
    <div>
      <img
        src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"
        alt=""
      />
      <button onClick={()=>navigate('/')}>Create User!</button>
    </div>
  );
}

export default EmptyData;
