import React from 'react';
import Tile from './tile';
import './tile.css';

function TileGrid({ tiles }) {
    return (
        <div className="tile-container">
            {tiles.map((tile, index) => (
                <Tile 
                    key={index}
                    img={tile.img}
                    projectName={tile.projectName}
                    descriptionPoints={tile.descriptionPoints}
                    GitHubLink={tile.GitHubLink}
                    LiveLink={tile.LiveLink}
                    TechStacks={tile.TechStacks}
                />
            ))}
        </div>
    );
}

export default TileGrid;
