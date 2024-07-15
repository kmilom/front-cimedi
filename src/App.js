import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './views/loginViews'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
      </Routes>
    </Router>
  );
};

export default App;
