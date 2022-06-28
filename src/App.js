import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Dishes from './forms/Dishes';
import Home from './Home';
import Cooks from './forms/Cooks';
import Planner from './Planner';
import AllSignups from './AllSignups';
import Navigation from './Navigation';
import Amplify, { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

function App() {

    const [user, setUser] = useState(null);
    const [customState, setCustomState] = useState(null);

    useEffect(() => {
        const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    setUser(data);
                    break;
                case "signOut":
                    setUser(null);
                    break;
                case "customOAuthState":
                    setCustomState(data);
            }
        });
        Auth.currentAuthenticatedUser()
            .then(currentUser => setUser(currentUser))
            .catch(() => console.log("Not signed in"));
        return unsubscribe;
    }, [] );
  
    return (
        <div className="App">
            <p>User: {user ? JSON.stringify(user.attributes) : 'None'}</p>
            {
                user ? (
                    <div>
                        <button onClick={() => Auth.signOut()}>Sign Out</button>
                        <Navigation />
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="signup" element={<AllSignups />} />
                            <Route path="dishes" element={<Dishes />} />
                            <Route path="cooks" element={<Cooks />} />
                            <Route path="planner" element={<Planner />} />
                        </Routes>
                    </div>
                ) : (
                    <button onClick={() => Auth.federatedSignIn({provider: CognitoHostedUIIdentityProvider.Google })}>Sign In</button>
                )
            }
    </div>
  );
}

export default App;