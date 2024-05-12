import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdMailOutline } from 'react-icons/md';
import '../components/css/footer.css';

const Footer = () => {
    return (
        <section className='footer'>
            <div className='socialLinks'>
                <a
                    href='https://www.linkedin.com/in/josephpicardat/'
                    className='icons'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsLinkedin className='socialLink' />
                </a>
                <a
                    href='https://github.com/josephpicardat'
                    className='icons'
                    target='_blank'
                    rel='noreferrer'
                >
                    <BsGithub className='socialLink' />
                </a>
            </div>
            <div href='mailto: josephpicardat1@gmail.com' className='emailLink'>
                <p className='icons'>
                    <MdMailOutline />
                </p>
                josephpicardat1@gmail.com
            </div>
        </section>
    );
};

export default Footer;
