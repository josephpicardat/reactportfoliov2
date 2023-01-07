import React from 'react';
import PortfolioNavBar from './components/Navbar';
import SideLinks from './components/SideLinks';
import StartingPage from './pages/StartingPage';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="wrapper">
      <SideLinks />
      <PortfolioNavBar />
      <StartingPage />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
