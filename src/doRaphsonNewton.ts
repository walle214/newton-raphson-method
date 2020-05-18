import {
  derivedFunction,
  evaluateFunction,
  LINE_COLOR,
  ANIMATION_DURATION,
  LINE_COLOR2,
} from './configs';
import LineCart from './LineChart';

const doRaphsonNewton = (
  Xn: number,
  iterationN: number,
  updateIterationN: (newIterationN: number) => void,
  lineChart: LineCart,
  setYDistance: (newYDistance: number) => void
): number => {
  const dxX = derivedFunction(Xn);
  if (dxX === 0) return 0;
  // setResults([...results, 2]);
  const fnX = evaluateFunction(Xn);
  const Xn1 = Xn - fnX / dxX;
  // console.log(iterationN);
  // addResult(Xn1);
  setTimeout(() => {
    const timeLINE = Math.trunc(ANIMATION_DURATION * 0.1);
    const timeLINE2 = Math.trunc(ANIMATION_DURATION * 0.2);
    const timeCLEAN = Math.trunc(ANIMATION_DURATION * 0.8);
    setTimeout(() => {
      lineChart.drawLine(
        [
          { x: Xn, y: 0 },
          { x: Xn, y: fnX },
        ],
        LINE_COLOR
      );
    }, timeLINE);
    setTimeout(() => {
      lineChart.drawLine(
        [
          { x: Xn, y: fnX },
          { x: Xn1, y: 0 },
        ],
        LINE_COLOR2
      );
    }, timeLINE2);
    setTimeout(() => {
      lineChart.reDrawnChart();
      // doRaphsonNewton(Xn1, iterationN + 1, lineChart, addResult);
    }, timeCLEAN);
  }, ANIMATION_DURATION * (iterationN + 1));

  updateIterationN(iterationN + 1);
  console.log({ y: fnX });
  setYDistance(fnX);
  return Xn1;
};
export default doRaphsonNewton;
