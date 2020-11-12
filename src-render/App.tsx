import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
const electron = window.require("electron");

function App() {
  const [files, setFiles] = useState<string[]>([]);

  async function onExit() {
    //electron.remote.app.exit();

    //console.log(electron);
    //console.log(electron.remote);
    //api.app.exit();
    //electronApp.exit();

    const result = await electron.ipcRenderer.invoke('some-specific-action', 3);

    setFiles(result);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={onExit}>
          Execute
        </button>
        {files.map((file, index) =>
          <p key={index}>{file}</p>
        )}
      </header>
    </div>
  );
}

export default App;
