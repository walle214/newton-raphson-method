import React, { useEffect } from 'react';
import LineCart from '../LineChart';
import {
  ChartData,
  CANVAS_ID,
  ITERATIONS_COUNT,
  INIT_X,
  EXPECTED_RESULT,
} from '../configs';
import doRaphsonNewton from '../doRaphsonNewton';

interface DrawnerLinesProps {
  //   lineChart?: LineCart;
  addResult: (newResult: number) => void;
  lastResult: number | undefined;
  initialPoint: ChartData;
  iterationN: number;
  updateIterationN: (newIterationN: number) => void;
  yDistance: number;
  setYDistance: (newYDistance: number) => void;
}
let lineChart = null;
const DrawnerLines = (props: DrawnerLinesProps) => {
  useEffect(() => {
    // console.log(props.lastResult);
    lineChart = new LineCart({
      canvasId: CANVAS_ID,
      minX: -5,
      minY: -5,
      maxX: 5,
      maxY: 5,
      initialChart: props.initialPoint,
    });
    // doRaphsonNewton();
    if (
      props.iterationN < ITERATIONS_COUNT &&
      !(props.yDistance > -EXPECTED_RESULT && props.yDistance < EXPECTED_RESULT)
    ) {
      props.addResult(
        doRaphsonNewton(
          props.lastResult || INIT_X,
          props.iterationN,
          props.updateIterationN,
          lineChart,
          props.setYDistance
        )
      );
    }

    // lineChart = null;
  });
  //   doRaphsonNewton;
  return <div></div>;
};
export default DrawnerLines;
