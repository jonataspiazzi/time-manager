import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import ContextScreen from './screens/context';
import MainScreen from './screens/main';

// Ref to code using subroutes.
// https://codesandbox.io/s/react-router-route-config-5stco?from-embed=&file=/example.js

export default function App() {
  const [] = useState();
  return (
    <Router>
      <Switch>
        <Route path="/main" render={() => <MainScreen />} />
        <Route path="/context" render={() => <ContextScreen />} />
        <Route path="/" render={() => <p>404 - Not Found!</p>} />
      </Switch>
    </Router>
  );
}
