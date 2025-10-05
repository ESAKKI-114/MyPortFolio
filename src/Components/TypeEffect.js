import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 100, repeatDelay = 5000 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout); // Cleanup timeout
    } else {
      // Reset the text after a delay
      const repeatTimeout = setTimeout(() => {
        setDisplayText('');
        setCurrentIndex(0);
      }, repeatDelay);

      return () => clearTimeout(repeatTimeout); // Cleanup repeat timeout
    }
  }, [currentIndex, text, speed, repeatDelay]);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Blink every 500ms

    return () => clearInterval(cursorInterval); // Cleanup interval
  }, []);

  return (
    <span>
      {displayText}
      {showCursor && <span className="blinking-cursor">|</span>}
    </span>
  );
};

export default TypingEffect;