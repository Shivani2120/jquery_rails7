import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashbourd from "../components/Dashbourd";
import Books from "../components/Books";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Dashbourd />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  </Router>
);