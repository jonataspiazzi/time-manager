import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import iconHome from '../assets/icon-home.svg';

export default function MainScreen() {
  const [cycle, setCycle] = useState(0);
  const history = useHistory();

  function goto() {
    history.push('context');
  }

  return (
    <div>
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Time Manager</a>
        <input className="form-control form-control-dark" type="text" placeholder="Search" style={{ display: 'none' }} />
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-3 col-lg-2 bg-light sidebar">
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={18} height={18} className="feather">
                      <path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                    </svg>
                    <span>Dashboard</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" width={18} height={18} className="feather">
                      <path fill="currentColor" d="M205.22 22.09c-7.94-28.78-49.44-30.12-58.44 0C100.01 179.85 0 222.72 0 333.91 0 432.35 78.72 512 176 512s176-79.65 176-178.09c0-111.75-99.79-153.34-146.78-311.82zM176 448c-61.75 0-112-50.25-112-112 0-8.84 7.16-16 16-16s16 7.16 16 16c0 44.11 35.89 80 80 80 8.84 0 16 7.16 16 16s-7.16 16-16 16z"></path>
                    </svg>
                  Drink Water
                </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width={18} height={18} className="feather">
                      <path fill="currentColor" d="M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"></path>
                    </svg>
                  Pomodoro
                </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" width={18} height={18} className="feather">
                      <path fill="currentColor" d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z" />
                    </svg>
                  Activities
                </a>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Dashboard</h1>
            </div>
            <div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="form-check-label bold">
                  Enable context menu
                </label>
                <small className="form-text text-muted mb-3">
                  If enabled the context menu (radial menu) can be called by using the shortcut at any time, even if the there is no focus on the program.
                </small>
              </div>
              <div className="form-group">
                <label>
                  Context menu keyboard shortcut
                </label>
                <input className="form-control" type="text" placeholder="" value="Ctrl+Shift+1" />
                <small className="form-text text-muted">
                  The keyboard shortcut to call the context menu (radial menu).
                </small>
              </div>
              <div className="form-group">
                <label>
                  Context menu size
                </label>
                <input className="form-control" type="text" placeholder="" value="512px" />
                <small className="form-text text-muted">
                  The size of the context menu (radial menu). This value is used to width and height.
                </small>
              </div>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Drink Water</h1>
            </div>
            <div>
              <p>Form</p>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Pomodoro</h1>
            </div>
            <div>
              <p>Form</p>
            </div>
            <div className="pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Activities</h1>
            </div>
            <div>
              <p>Form</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}