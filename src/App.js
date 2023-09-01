import React from "react";
import MyForm from "./components/MyForm";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreviewData from "./components/PreviewData";
import EmptyData from "./components/EmptyData";
import UpdateData from "./components/UpdateData";
import MaleData from "./components/MaleData";
import FemaleData from "./components/FemaleData";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route exact path="/" element={<MyForm />} />
        <Route path="/pd" element={<PreviewData />} />
        <Route path="/empty" element={<EmptyData />} />
        <Route path="edit/:id" element={<UpdateData />} />
      </Routes>
    </div>
  );
}

export default App;
