import React from 'react';
import './Resume.css';

const Resume = () => {
    const openDriveLink = () => {
        window.open('https://drive.google.com/file/d/1IKpvS0TyHVuC4zibv_-dcPnUN3WQyPQ9/view?usp=sharing');
    };

    return (
        <div className="resume-container">
            <button className="resume-button crazy-button" onClick={openDriveLink}>Open Resume</button>
        </div>
    );
};

export default Resume;
