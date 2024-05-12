import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/jpLogo.png';
import './css/navbar.css';
import resume from '../assets/pdf/resume.pdf';
import { MdOutlineFileDownload } from 'react-icons/md';

const NavBar = ({ activeSection, setActiveSection }) => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    return (
        <Navbar className='navbarCSS' expand='lg'>
            <Navbar.Brand id='navbarImgbackground' href='#home'>
                <img
                    className='logo'
                    src={logo}
                    alt="Joseph Picardat's Logo"
                ></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse
                className='justify-content-end  navbarText'
                id='basic-navbar-nav'
            >
                <Nav className='linkDiv'>
                    <Nav.Link
                        // href='#about-me'
                        className={`navLinks ${
                            activeSection === 'about-me' ? 'active' : ''
                        }`}
                        onClick={() => scrollToSection('about-me')}
                    >
                        <span className='nav_numbers'>01. </span>About Me
                    </Nav.Link>
                    <Nav.Link
                        className={`navLinks ${
                            activeSection === 'pastWork' ? 'active' : ''
                        }`}
                        onClick={() => scrollToSection('pastWork')}
                    >
                        <span className='nav_numbers'>02. </span>Work
                    </Nav.Link>
                    <div className='individualContainer'>
                        <Nav.Link
                            className={`navLinks ${
                                activeSection === 'contact' ? 'active' : ''
                            }`}
                            onClick={() => scrollToSection('contact')}
                        >
                            <span className='nav_numbers'>03. </span>Contact
                        </Nav.Link>
                    </div>

                    <div className='individualContainer'>
                        <Nav.Link
                            href={resume}
                            className='navLinks'
                            target='_blank'
                            rel='noreferrer'
                        >
                            <span className='nav_numbers'>04.</span>
                            Resume
                        </Nav.Link>

                        <a
                            href={resume}
                            download='Joseph_Picardat_Resume.pdf'
                            className='downloadWrapper'
                        >
                            <MdOutlineFileDownload id='download' />
                        </a>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
