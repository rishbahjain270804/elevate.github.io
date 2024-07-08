// Marquee.js
import React, { useState, useEffect } from 'react';

const Marquee = () => {
  const [text, setText] = useState('');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const textToScroll = 'Elevate your fashion with our t-rex designs....';
    const repeatCount = 10;
    const repeatedText = Array(repeatCount + 1).join(textToScroll);
    setText(repeatedText);
    const intervalId = setInterval(() => {
      setScrollPosition((prevPosition) => {
        if (prevPosition > repeatedText.length) {
          return 0; // reset the scroll position when it reaches the end
        }
        return prevPosition +2;
      });
    }, 16); // 16ms = 60fps
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        height: '20px',
        backgroundColor: '#ccc',
        color: '#fff',
        padding: '2px',
        fontSize: '12px',
        direction: 'rtl', // start the text from the right
      }}
    >
      <span
        style={{
          position: 'absolute',
          right: `${scrollPosition}px`, // use right instead of left
          top: 0,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Marquee;