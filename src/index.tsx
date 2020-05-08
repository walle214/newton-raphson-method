import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import LineCart from './LineChart';
import { CANVAS_ID, evaluateFunction, ChartData } from './configs';
import doRaphsonNewton from './doRaphsonNewton';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const points: ChartData = [];
const X = 20;
for (let a = -X; a < X; a += 0.1) {
  points.push({
    x: a,
    y: evaluateFunction(a),
  });
}
const myLineChart = new LineCart({
  canvasId: CANVAS_ID,
  minX: -2,
  minY: -2,
  maxX: 2,
  maxY: 2,
  initialChart: points,
});

doRaphsonNewton(1, 0, myLineChart);
