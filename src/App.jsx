import React from "react";
import Home from "./app/home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Business from "./app/business";
import ViewBusiness from "./app/Viewbusiness";
import AddBusiness from "./app/AddBusiness";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/businesses" element={<Business />} />
          <Route exact path="/businesses/:id" element={<ViewBusiness />} />
          <Route exact path="/businesses/create" element={<AddBusiness />} />
          <Route exact path="/" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
