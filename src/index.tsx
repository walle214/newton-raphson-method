import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import LineCart from './LineChart';
import { CANVAS_ID, evaluateFunction } from './configs';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

const myLineChart = new LineCart({
  canvasId: CANVAS_ID,
  minX: 0,
  minY: 0,
  maxX: 140,
  maxY: 100,
  unitsPerTickX: 10,
  unitsPerTickY: 10,
});

const a: Object[] = [];
for (var i = 1; i < 14; i++) {
  a.push({
    x: i * 10,
    y: evaluateFunction(i),
  });
  console.log(evaluateFunction(i));
}

var data = [
  {
    x: 0,
    y: 0,
  },
  {
    x: 20,
    y: 10,
  },
  {
    x: 40,
    y: 15,
  },
  {
    x: 60,
    y: 40,
  },
  {
    x: 80,
    y: 60,
  },
  {
    x: 100,
    y: 50,
  },
  {
    x: 120,
    y: 85,
  },
  {
    x: 140,
    y: 100,
  },
];

myLineChart.drawLine(a, 'blue', 3);
