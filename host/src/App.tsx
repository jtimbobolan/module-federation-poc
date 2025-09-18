

import { Suspense, lazy, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './store';

import VueWrapper from './components/VueWrapper';
import RemoteVueApp from './components/RemoteVueApp';
import AngularWrapper from './components/AngularWrapper';
import AngularRemoteApp from './components/AngularRemoteApp';


const RemoteHome = lazy(() => import('home/Home'));
const RemoteSupport = lazy(() => import('support/Support'));

const APPS = [
  { key: 'home', label: 'Home', component: <RemoteHome /> },
  { key: 'about', label: 'About', component: <VueWrapper /> },
  { key: 'contact', label: 'Contact', component: <AngularRemoteApp /> },
  { key: 'careers', label: 'Careers', component: <RemoteVueApp /> },
  { key: 'support', label: 'Support', component: <RemoteSupport /> },
];


export function App() {
  const [selectedApp, setSelectedApp] = useState('home');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Host App mounted');
    // Set initial user/token state on mount
    // dispatch(setUser({ id: '1', name: 'Alice', token: 'xyz' }));
  }, [dispatch]);

  // Print current Redux state for debugging
  const state = useSelector((state: any) => state);

  const currentApp = APPS.find(app => app.key === selectedApp)?.component;

  useEffect(() => {
    window.history.replaceState(null, '', '/');
  }, [selectedApp, currentApp]);

  return (
    <>
      <div style={{ background: '#f8f9fa', padding: '0.5rem 1rem', fontSize: 14, borderBottom: '1px solid #e0e0e0' }}>
        <strong>Host Redux State:</strong> {JSON.stringify(state)}
        <button
          style={{ marginLeft: 16, padding: '2px 10px', fontSize: 13 }}
          onClick={() => dispatch(setUser({ id: '2', name: 'Bob', token: 'token-456' }))}
        >
          Set State
        </button>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">HostApp</span>
          <div className="dropdown ms-3">
            <button className="app-launcher-btn dropdown-toggle" type="button" id="appLauncherDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              <span style={{ marginRight: '0.5rem', verticalAlign: 'middle' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{ verticalAlign: 'middle' }}>
                  <path d="M2 2h3v3H2V2zm4.5 0h3v3h-3V2zM11 2h3v3h-3V2zM2 6.5h3v3H2v-3zm4.5 0h3v3h-3v-3zM11 6.5h3v3h-3v-3zM2 11h3v3H2v-3zm4.5 0h3v3h-3v-3zM11 11h3v3h-3v-3z" />
                </svg>
              </span>
              App Launcher
            </button>
            <ul className="dropdown-menu" aria-labelledby="appLauncherDropdown">
              {APPS.map(app => (
                <li key={app.key}>
                  <button className="dropdown-item" onClick={() => setSelectedApp(app.key)}>{app.label}</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <main className="container">
        <Suspense fallback={<div>Loading remote app...</div>}>
          {currentApp}
        </Suspense>
      </main>
    </>
  );
}
