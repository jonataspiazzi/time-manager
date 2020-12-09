import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import AudioPlayerScreen from './screens/audioPlayer';
import ContextMenuScreen from './screens/contextMenu';
import ConfigurationScreen from './screens/configuration';
import LockScreen from './screens/lock';

// Ref to code using subroutes.
// https://codesandbox.io/s/react-router-route-config-5stco?from-embed=&file=/example.js

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/configuration" render={() => <ConfigurationScreen />} />
        <Route path="/context-menu" render={() => <ContextMenuScreen />} />
        <Route path="/lock" render={() => <LockScreen />} />
        <Route path="/audio-player" render={() => <AudioPlayerScreen />} />
        <Route path="/" render={() => <p>404 - Not Found!</p>} />
      </Switch>
    </Router>
  );
}
