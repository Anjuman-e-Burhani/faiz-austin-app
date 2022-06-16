import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dishes from './forms/Dishes';
import Home from './Home';
import Cooks from './forms/Cooks';
import Navigation from './Navigation';
import Planner from './Planner';
import { withAuthenticator } from '@aws-amplify/ui-react';
import AllSignups from './AllSignups';

function App({ signOut }) {
    return (
        <div className="App">
            <Navigation signOut={signOut}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signup" element={<AllSignups />} />
                <Route path="dishes" element={<Dishes />} />
                <Route path="cooks" element={<Cooks />} />
                <Route path="planner" element={<Planner />} />
            </Routes>
        </div>
    );
}

export default withAuthenticator(App);