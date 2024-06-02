import Uppertext from './uppertext.js';
import './skills.css';
import Langdb from './langdb.js';
import FrameTech from './FrameTech.js'; 
import ToolsPlatforms from './ToolsPlatforms.js';

function skills() 
{
    return (
        <div className="skills">
            <div className='skillsheading'>
                <h1>Skills</h1>
            </div>
            <div id="text">
                <Uppertext text="I love to learn new things and experiment with new technologies.
                These are some of the major languages, technologies, tools and platforms I have worked with:" />
            </div>
            <div id="skillset">
                <Langdb className="skillsets" />
                <FrameTech className="skillsets"/>
                <ToolsPlatforms className="skillsets"/>
            </div>
        </div>
    );
}

export default skills;