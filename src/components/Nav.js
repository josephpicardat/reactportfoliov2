import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/jpLogo.png';
import './css/navbar.css';

const PortfolioNavBar = () => {
  return (
    <Navbar className="navbarCSS" expand="lg">
      <Navbar.Brand id="navbarImgbackground" href="#home">
        <img className="logo" src={logo} alt="Joseph Picardat's Logo"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end  navbarText"
        id="basic-navbar-nav"
      >
        <Nav className="linkDiv">
          <Nav.Link href="#about-me" className="navLinks">
            <span className="nav_numbers">01. </span>About Me
          </Nav.Link>
          <Nav.Link href="#pastWork" className="navLinks">
            <span className="nav_numbers">02. </span>Work
          </Nav.Link>
          <Nav.Link href="#contact" className="navLinks">
            <span className="nav_numbers">03. </span>Contact
          </Nav.Link>
          <Nav.Link to={'./resume'} className="navLinks">
            <span className="nav_numbers">04. </span>Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PortfolioNavBar;
