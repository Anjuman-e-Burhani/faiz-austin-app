import React from 'react';
import { Routes, Route, Switch } from 'react-router-dom';
import './App.css';
import MenuSetter from './MenuSetter';
import Items from './Items';
import Home from './Home';
import Navigation from './Navigation';

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<MenuSetter />} />
                <Route path="items" element={<Items />} />
            </Routes>
        </div>
    );
}

export default App;