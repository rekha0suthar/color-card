import React, { useState } from 'react';
import tinycolor from 'tinycolor2';

const Color = () => {
  const [colorName, setColorName] = useState('');
  const [textColor, setTextColor] = useState('black');
  const [hexaCode, setHexaCode] = useState('');

  const handleColor = (color) => {
    setColorName(color);
    setHexaCode(tinycolor(color).toHexString());
  };

  const toggleColor = () => {
    if (textColor === 'black') {
      setTextColor('white');
    } else {
      setTextColor('black');
    }
  };

  return (
    <>
      <div
        className="card"
        style={{ backgroundColor: colorName, color: textColor }}
      >
        {colorName ? (
          <>
            {colorName}
            <br />
            {hexaCode}
          </>
        ) : (
          'Empty value'
        )}
      </div>
      <input
        type="text"
        onChange={(e) => handleColor(e.target.value)}
        placeholder="Enter color name..."
      />
      <button onClick={toggleColor}>Toggle Text Color</button>
    </>
  );
};

export default Color;
