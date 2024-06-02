import './description.css';
import Photo from './myphoto.jpeg';

function Description() {
    return (
        <div id="description">
            <div id="description-text">
                <h3>
                    I'm an adventurous soul, always seeking new challenges and experiences. I thrive on the excitement of discovery. My curiosity extends to learning about diverse cultures and histories, delving into captivating narratives that broaden my perspective. Photography is a significant passion of mine, where I freeze fleeting moments of beauty and intrigue through my lens, sharing my unique viewpoint with the world. Professionally, I'm committed to environmental science, dedicated to finding sustainable solutions to global challenges, be it researching renewable energy or advocating for conservation efforts. I approach life with a blend of curiosity and purpose, believing in making a positive impact by following my passions and seizing every opportunity to leave a meaningful mark on the world.
                </h3>
            </div>
            <div id="description-image">
                <img src={Photo} alt="Description" />
            </div>
        </div>
    );
}

export default Description; 