import React from 'react';

const LogoSVG = ({ width = 50, height = 50 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block"
    >
      <rect x="25" y="25" width="50" height="50">
        <animateTransform 
          attributeName="transform" 
          type="rotate" 
          from="0 50 50" 
          to="360 50 50" 
          dur="10s" 
          repeatCount="indefinite" 
        />
        <animate 
          attributeName="fill" 
          values="lightgreen;blue;yellow;lightgreen" 
          dur="10s" 
          repeatCount="indefinite" 
        />
      </rect>
    </svg>
  );
};

export default LogoSVG;

