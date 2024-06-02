import Typing from "./TypingEffect";
import "./Myname.css";
import Socialmedia from "./Socialmedia";

function Myname({
  text,
  TypingSpeed = 100,
  EraseSpeed = 50,
  duration = 1000
}) {
  return (
    <div id="name">
      <h1>Vivek Anand Singh</h1>
      <Typing text={text} TypingSpeed={TypingSpeed} EraseSpeed={EraseSpeed} duration={duration} />
      <Socialmedia />
    </div>
  );
  
}
export default Myname;