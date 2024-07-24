import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminView from './views/adminViews';
import ListUsers from './components/listUsers';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminView />}>
                    <Route path="admin/users" element={<ListUsers />} />
                    {/* Agrega otras rutas aquí */}
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
