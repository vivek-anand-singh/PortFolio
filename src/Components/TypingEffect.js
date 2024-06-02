import { useEffect, useState } from 'react';
import './TypingEffect.css';
function Typing({
    text,
    TypingSpeed = 100,
    EraseSpeed = 50,
    duration = 1000
}) {
    let [displayedText, setDisplayedText] = useState("");
    let [isDeleting, setIsDeleting] = useState(false);
    let [index, setIndex] = useState(0);

    useEffect(() => {
        const handleTyping = () => {
            if (!isDeleting) {
                if (displayedText.length < text[index].length) {
                    setDisplayedText(text[index].substring(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), duration);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText((prev) => prev.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
                }
            }
        };

        const timeout = setTimeout(() => {
            handleTyping();
        }, isDeleting ? EraseSpeed : TypingSpeed);

        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, index, text, TypingSpeed, EraseSpeed, duration]);

    return (
        <div className="typing-effect">
            {displayedText}
            <span className="caret">|</span>
        </div>
    );
}

export default Typing;