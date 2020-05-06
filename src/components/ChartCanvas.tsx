import React from 'react';

import { AspectRatioFence } from 'react-aspect-ratio-fence';
import 'react-aspect-ratio-fence/css/style.css';

import { CANVAS_ASPECT_RATIO, CANVAS_ID } from '../configs';

const ChartCanvas = () => {
  return (
    <div
      style={{
        border: '2px white solid',
        width: '90%',
        margin: 'auto',
      }}
    >
      <AspectRatioFence ratio={CANVAS_ASPECT_RATIO}>
        <canvas id={CANVAS_ID}></canvas>
      </AspectRatioFence>
    </div>
  );
};
export default ChartCanvas;
