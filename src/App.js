import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import MenuSetter from './MenuSetter';
import Dishes from './Dishes';
import Home from './Home';
import Cooks from './Cooks';
import Navigation from './Navigation';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Button } from 'react-bootstrap';

function App({ signOut }) {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="menu" element={<MenuSetter />} />
                <Route path="dishes" element={<Dishes />} />
                <Route path="cooks" element={<Cooks />} />
            </Routes>
            <Button onClick={signOut}>Sign Out</Button>
        </div>
    );
}

export default withAuthenticator(App);