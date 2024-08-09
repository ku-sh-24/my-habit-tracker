import React from 'react';

interface IconProps {
  color?: string;   // To change the fill color of the SVG
  width?: string;   // To change the width of the SVG
  height?: string;  // To change the height of the SVG
}

const Con: React.FC<IconProps> = ({
  color = "#000000",  // Default color
  width = "100px",    // Default width
  height = "100px"    // Default height
}) => (
  <svg
    viewBox="0 0 1024 1024"
    width={width}
    height={height}
    xmlns="http://www.w3.org/2000/svg"
    fill={color}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M512.61 766.47c-191.73 0-382.35 23.79-446.14-114.4-21.3-46.15 156.87 53.84 302.12 65.37C269.82 673.22 142.26 612.89 111 502.09 97.46 454 325 655.19 382.14 669.37c-42.61-38.46-223.06-198.32-168.49-294.18 25.18-44.22 184 242.27 184 242.27s-134.75-248.84-58.1-324.95c31-30.76 67.78 276.88 141.38 344.17 0 0-35.83-382.63 30-380.71s51.32 244.19 32 384.55C630 519.4 645.53 315.59 672.64 288.67s69.72 153.82-63.91 332.64c77.47-13.46 197.54-299.95 203.35-251.88 19 157.26-166.55 294.18-166.55 294.18 120.07-38.46 244-188.43 269.19-165.36s-112.33 186.51-292.43 225c211.1-1.92 338.27-127.59 337-84.6-3.78 125.01-254.95 127.82-446.68 127.82z"
        fill={color} // Apply color from props
      ></path>
    </g>
  </svg>
);

export default Con;
