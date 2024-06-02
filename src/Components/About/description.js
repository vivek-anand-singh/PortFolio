import './description.css';
import Photo from '../../Assets/photo.svg';

function Description()
{
    return(
        <div id="description">
            <div id="description-text">
                <h3>
                    This is where you can describe about yourself. 
                    The more you describe about yourself, the better it is!
                </h3>
                <h3>
                    Extra Information about you, like hobbies and your goals.
                    Example Paragraph: I am passionate about my work. Because I love what I do,
                    I have a steady source of motivation that drives me to do my best. 
                    In my last job, this passion led me to challenge myself daily and learn new skills that helped me to do better work. 
                    For example, I taught myself how to use Photoshop to improve the quality of our photos and graphics.
                    I soon became the go-to person for any design needs.
                </h3>
            </div>
            <div id="description-image">
                <img src={Photo} alt="Description" />
            </div>
        </div>
    );
}

export default Description; 