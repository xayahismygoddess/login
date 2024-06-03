import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login2 from './components/Login2'; // Adjust the path as needed
import Signup from './components/Signin'; // Adjust the path as needed

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signup />} />
        <Route path="/" element={<Login2 />} />
      </Routes>
    </Router>
  );
}

export default App;
