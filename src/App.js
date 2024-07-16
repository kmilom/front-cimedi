import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistreView from './views/registreViews';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistreView />} />
      </Routes>
    </Router>
  );
};

export default App;
