import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistreView from './views/registreViews';
import LoginView from './views/loginViews';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginView />} />
        <Route path='/registro' element={<RegistreView />} />
      </Routes>
    </Router>
  );
};

export default App;
