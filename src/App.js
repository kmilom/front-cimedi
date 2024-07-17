import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginView from './views/loginViews';
import PacienteView from './views/PacienteViews';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path="/profile" element={<PacienteView />} />
      </Routes>
    </Router>
  );
};

export default App;
