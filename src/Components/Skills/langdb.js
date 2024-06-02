import "./langdb.css";
import Javalogo from "./logo/javalogo.svg";
import PHPlogo from "./logo/phplogo.svg";
import JSlogo from "./logo/javascriptlogo.svg";
import Pythonlogo from "./logo/pythonlogo.svg";
import MySQLlogo from "./logo/mysqllogo.svg";

function langdb() {
  return (
    <div id="langdb">
      <div id="heading">
        <h2>Languages and Databases</h2>
      </div>
      <div id="icons">
        <div id="Java" className="langIcons">
          <img src={Javalogo} alt="Java logo"></img>
          Java
        </div>
        <div id="php" className="langIcons">
          <img src={PHPlogo} alt="PHP logo"></img>
          PHP
        </div>
        <div id="javascript" className="langIcons">
          <img src={JSlogo} alt="JavaScript logo"></img>
          JavaScript
        </div>
        <div id="python" className="langIcons">
          <img src={Pythonlogo} alt="Python logo"></img>
          Python
        </div>
        <div id="mysql" className="langIcons">
          <img src={MySQLlogo} alt="MySQL logo"></img>
          MySQL
        </div>
      </div>
    </div>
  );
}

export default langdb;
