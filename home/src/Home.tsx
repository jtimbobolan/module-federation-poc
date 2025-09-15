

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

import { useSelector } from 'react-redux';

export function Home() {


  // Print current Redux state for debugging
  const StateViewer = () => {
    const state = useSelector((state: any) => state);
    return (
      <div style={{ background: '#f8f9fa', padding: '0.5rem 1rem', fontSize: 14, borderBottom: '1px solid #e0e0e0' }}>
        <strong>Home Redux State:</strong> {JSON.stringify(state)}
      </div>
    );
  };

  const content = (
    <>
      <StateViewer />
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <span className="navbar-brand">Home App</span>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </>
  );
  // If running standalone, wrap in Provider. If remote, assume host provides Provider.
  return content;
}

export default Home;
