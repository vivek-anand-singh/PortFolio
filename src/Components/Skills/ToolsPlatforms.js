import gitlogo from "./logo/gitlogo.svg";
import githublogo from "./logo/githublogo.svg";
import './ToolsPlatforms.css';

function ToolsPlatforms() {
  return (
    <div id="ToolsPlatforms">
      <h2>Tools & Platforms</h2>
      <div id="iconsmain">
        <div className="icons">
          <img src={gitlogo} alt="Git logo"></img>
          Git
        </div>
        <div className="icons">
          <img src={githublogo} alt="GitHub logo" style={{ backgroundColor: 'white' }}></img>
          GitHub
        </div>
      </div>
    </div>
  );
}

export default ToolsPlatforms;
