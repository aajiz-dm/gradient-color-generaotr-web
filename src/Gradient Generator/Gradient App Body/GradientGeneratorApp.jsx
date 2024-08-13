import React from 'react';
import "../Linear Gradient/Nav.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import GradientBody from '../Gradient App Body';
import LinearGradient from '../Linear Gradient/LinearGradient.jsx';
import RadialGradient  from "../Radial Gradient/RadialGradient.jsx"
import ConicGradient from '../Conic Gradient/ConicGradient.jsx';
import RepeatingLinear from '../Repeating Linear/RepeatingLinear.jsx';

export default function GradientGenerator() {
  return (

<Router>
      <Routes>
        {/* <Route path="/" element={<GradientBody/>}/> */}
        <Route path="/" element={<LinearGradient/>} />
        <Route path="/Raidal-gradient" element={<RadialGradient/>} />
        <Route path="/Conic-gradient" element={<ConicGradient/>} />
        <Route path="/Repeating-linear" element={<RepeatingLinear/>} />
      </Routes>
    </Router>

  )
}
