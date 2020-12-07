import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AudioPlayerScreen from './screens/audioPlayer';
import ContextScreen from './screens/context';
import LockScreen from './screens/lock';
import ConfigurationScreen from './screens/configuration';

// Ref to code using subroutes.
// https://codesandbox.io/s/react-router-route-config-5stco?from-embed=&file=/example.js

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/configuration" render={() => <ConfigurationScreen />} />
        <Route path="/context" render={() => <ContextScreen />} />
        <Route path="/lock" render={() => <LockScreen />} />
        <Route path="/audioPlayer" render={() => <AudioPlayerScreen />} />
        <Route path="/" render={() => <p>404 - Not Found!</p>} />
      </Switch>
    </Router>
  );
}
