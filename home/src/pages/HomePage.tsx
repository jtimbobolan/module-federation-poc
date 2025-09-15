

import { useSelector } from 'react-redux';

export const HomePage = () => {
  const user = useSelector((state: any) => state.auth?.user);
  const token = useSelector((state: any) => state.auth?.token);
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>Home Page</h2>
      <p>Welcome to the Home page of the Home app.</p>
      <div style={{ marginTop: '2rem', color: '#0d6efd' }}>
        <strong>Shared User:</strong> {user ? `${user.name} (ID: ${user.id})` : 'None'}<br />
        <strong>Token:</strong> {token || 'None'}
      </div>
    </div>
  );
};

export default HomePage;
