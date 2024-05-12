import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { MuiNavbar } from './components/MuiNavbar';
import SideLinks from './components/SideLinks';
import StartingPage from './pages/StartingPage';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [activeSection, setActiveSection] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const home = document.getElementById('home');
            const about = document.getElementById('about-me');
            const work = document.getElementById('pastWork');
            const contact = document.getElementById('contact');
            const sections = [home, about, work, contact];
            const windowHeight = window.innerHeight;

            const scrollPosition = window.scrollY + windowHeight / 2;

            let newActiveSection = null;

            sections.forEach((section, index) => {
                if (
                    section &&
                    ((scrollPosition >= section.offsetTop &&
                        scrollPosition <=
                            section.offsetTop + section.offsetHeight) ||
                        (index === sections.length - 1 &&
                            scrollPosition >= section.offsetTop))
                ) {
                    newActiveSection = section.id;
                }
            });

            if (newActiveSection !== activeSection) {
                setActiveSection(newActiveSection);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    return (
        <div className='wrapper'>
            {/* <SideLinks /> */}
            {/* <NavBar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            /> */}
            <MuiNavbar
                activeSection={activeSection}
                setActiveSection={setActiveSection}
            />
            <StartingPage id='home' />
            <About id='about-me' />
            <Work id='pastWork' />
            <Contact id='contact' />
            <Footer />
        </div>
    );
}

export default App;
