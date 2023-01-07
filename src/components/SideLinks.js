import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import line from '../assets/blueLine.png';
import './css/SideLinks.css';

const SideLinks = () => {
  return (
    <section className="linksWrapper">
      <div className="linksDivLeft">
        <p className="description">
          <img src={line} alt="Arrow" className="line"></img>
          My Socials:
          <a
            href="https://www.linkedin.com/in/joseph-picardat-586897241/"
            className="iconWrapper"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="socialLink" />
          </a>
          <a
            href="https://github.com/josephpicardat"
            className="iconWrapper"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="socialLink" />
          </a>
        </p>
      </div>
      <div className="linksDivRight">
        <p className="description">
          <img src={line} alt="Arrow" className="line"></img>
          My Email:
          <a href="mailto: josephpicardat1@gmail.com" className="emailLink">
            josephpicardat1@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};
export default SideLinks;
