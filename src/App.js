import React from 'react';
import PortfolioNavBar from './components/navbar';
import PortfolioBody from './pages/body';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ViewSDKClient from './components/resume';

function App() {
  let component;
  switch (window.location.pathname) {
    default:
      component = <PortfolioBody />;
      break;
    case '/resume':
      component = <resume />;
      break;
  }
  return (
    <>
      <PortfolioNavBar />
      {component}
    </>
  );
}

export default App;
