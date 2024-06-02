import Reactlogo from './logo/reactlogo.svg';
import NodejsLogo from './logo/nodejslogo.svg';
import './FrameTech.css';

function FrameTech()
{
    return (
        <div id="FrameTech">
            <h2>FrameWork and Technologies</h2>
            <div id="iconsmain">
                <div className="icons">
                    <img src={Reactlogo} alt="React logo"></img>
                    React
                </div>
                <div className="icons">
                    <img src={NodejsLogo} alt="Nodejs logo"></img>
                    NodeJs
                </div>
            </div>
        </div>
    );
}

export default FrameTech;