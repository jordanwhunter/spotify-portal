import React from 'react';
import Login from './components/authentication/Login';
import Dashboard from './components/main/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return code
    ? <Dashboard code={code} />
    : <Login />
}

export default App;
