import {
  derivedFunction,
  ITERATIONS_COUNT,
  evaluateFunction,
  LINE_COLOR,
  ANIMATION_DURATION,
  LINE_COLOR2,
} from './configs';
import LineCart from './LineChart';

const doRaphsonNewton = (
  Xn: number,
  iterationN: number,
  lineChart: LineCart
) => {
  const dxX = derivedFunction(Xn);
  if (dxX === 0 || iterationN >= ITERATIONS_COUNT) return;
  // setResults([...results, 2]);
  const fnX = evaluateFunction(Xn);
  const Xn1 = Xn - fnX / dxX;
  console.log(iterationN);
  setTimeout(() => {
    lineChart.drawLine(
      [
        { x: Xn, y: 0 },
        { x: Xn, y: fnX },
      ],
      LINE_COLOR
    );
  }, Math.trunc(ANIMATION_DURATION / 2));
  setTimeout(() => {
    lineChart.drawLine(
      [
        { x: Xn, y: fnX },
        { x: Xn1, y: 0 },
      ],
      LINE_COLOR2
    );
  }, ANIMATION_DURATION);
  setTimeout(() => {
    lineChart.reDrawnChart();
    doRaphsonNewton(Xn1, iterationN + 1, lineChart);
  }, Math.trunc(ANIMATION_DURATION * 1.5));
};
export default doRaphsonNewton;
