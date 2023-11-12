import { useState } from 'react';
import * as S from './ColorPalette.style';

const COLORS = [
  [0, 0, 0], // black
  [255, 0, 0], // red
  [255, 165, 0], // orange
  [255, 255, 0], // yellow
  [0, 128, 0], // green
  [0, 0, 255], // blue
  [165, 42, 42], // brown
  [128, 0, 128], // purple
];

const rgbaToHex = (r, g, b, a) => {
  // Ensure values are within the valid range
  r = Math.min(255, Math.max(0, r));
  g = Math.min(255, Math.max(0, g));
  b = Math.min(255, Math.max(0, b));
  a = Math.min(1, Math.max(0, a));

  // Convert RGB to hexadecimal
  const hexR = r.toString(16).padStart(2, '0');
  const hexG = g.toString(16).padStart(2, '0');
  const hexB = b.toString(16).padStart(2, '0');

  // Convert alpha to hexadecimal
  const hexA = Math.round(a * 255)
    .toString(16)
    .padStart(2, '0');

  // Combine values and return
  return `#${hexR}${hexG}${hexB}${hexA}`;
};

const ColorPalette = ({ colors = COLORS }) => {
  const [activeColor, setActiveColor] = useState(0);

  const handleColorChange = (color) => setActiveColor(color);

  return (
    <S.ColorPalette>
      <S.ColorTab>
        {colors.map((color, index) => (
          <S.ColorBarTabItemWrapper key={index}>
            <S.ColorTabItem
              key={index}
              color={rgbaToHex(...color, 0.85)}
              active={activeColor === index}
              onClick={() => handleColorChange(index)}
            />
          </S.ColorBarTabItemWrapper>
        ))}
      </S.ColorTab>
      <S.ColorBarWrapper>
        <S.ColorBar color={rgbaToHex(...colors[activeColor], 1)} />
        <S.ColorBarHandler />
      </S.ColorBarWrapper>
    </S.ColorPalette>
  );
};

export default ColorPalette;
