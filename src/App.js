import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MenuSetter from './MenuSetter';
import Dishes from './forms/Dishes';
import Home from './Home';
import Cooks from './forms/Cooks';
import Navigation from './Navigation';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<MenuSetter />} />
                <Route path="dishes" element={<Dishes />} />
                <Route path="cooks" element={<Cooks />} />
            </Routes>
        </div>
    );
}

export default App;