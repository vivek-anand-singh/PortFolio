import React from 'react';
import './tile.css';

function Tile({ img, projectName, descriptionPoints, GitHubLink, LiveLink, TechStacks }) {
    return (
        <div className="tile">
            <img src={img} alt="Project logo" />
            <h3>{projectName}</h3>
            <ul>
                {descriptionPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <div className="links">
                <a href={GitHubLink} target="_blank" rel="noreferrer">GitHub</a>
                <a href={LiveLink} target="_blank" rel="noreferrer">Live</a>
            </div>
            <div className="techstack">
                {TechStacks.map((stack, index) => (
                    <span key={index}>{stack}</span>
                ))}
            </div>
        </div>
    );
}

export default Tile;
