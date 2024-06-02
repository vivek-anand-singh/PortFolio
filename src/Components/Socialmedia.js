import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Socialmedia.css';

function Socialmedia() {
    return (
        <div className="social-media">
            <a href="https://www.github.com/"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://www.twitter.com/"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="https://www.gmail.com/"><FontAwesomeIcon icon={faEnvelope} /></a>
        </div>
    )
}

export default Socialmedia;