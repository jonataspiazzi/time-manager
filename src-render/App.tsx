import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ContextScreen from './screens/context';
import MainScreen from './screens/main';

// Ref to code using subroutes.
// https://codesandbox.io/s/react-router-route-config-5stco?from-embed=&file=/example.js

export default function App() {
  const [state, setState] = useState();
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} render={() => <MainScreen />} />
        <Route path="/context" render={() => <ContextScreen />} />
      </Switch>
    </Router>
  );
}
