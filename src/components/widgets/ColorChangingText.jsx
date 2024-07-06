'use client';
import React, { useEffect, useState } from 'react';

const ColorChangingText = ({ text }) => {
  const [coloredText, setColoredText] = useState([]);

  useEffect(() => {
    const newColoredText = text.split('').map((char, index) => ({
      char,
      color: 'initial', // Initial color
    }));
    setColoredText(newColoredText);

    const interval = setInterval(() => {
      setColoredText((prevColoredText) => {
        const newColoredText = [...prevColoredText];
        const randomIndex = Math.floor(Math.random() * text.length);
        newColoredText[randomIndex].color =
          `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        return newColoredText;
      });
    }, 300); // Change color every 300ms

    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {coloredText.map((item, index) => (
        <span key={index} style={{ color: item.color }}>
          {item.char}
        </span>
      ))}
    </span>
  );
};

export default ColorChangingText;
