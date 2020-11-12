import React, { useEffect, useState } from 'react';
import './App.css';
const electron = window.require("electron");

function App() {
  const [files, setFiles] = useState<string[]>([]);
  const [background, setBackground] = useState('');

  async function onExit() {
    //electron.remote.app.exit();

    //console.log(electron);
    //console.log(electron.remote);
    //api.app.exit();
    //electronApp.exit();

    const result = await electron.ipcRenderer.invoke('some-specific-action', 3);

    setFiles(result);
  }

  async function close() {
    electron.remote.getCurrentWindow().close();
  }

  useEffect(() => {
    const gColor = () => Math.round(Math.random()) * 100 + 155;

    const bg = `rgb(${gColor()}, ${gColor()}, ${gColor()})`;
    setBackground(bg);
  }, []);

  async function createSecondWindow() {
    await electron.ipcRenderer.invoke('open-second-window');
  }

  return (
    <div className="test-circle" style={{ background }}>
      <p>Hello World!</p>
      <button onClick={createSecondWindow}>
        Open Second.
      </button>
      <button onClick={close}>
        Close
      </button>
    </div>
  );
}

export default App;
