export const ANIMATION_DURATION = 700; /// miliseconds

export const LINE_COLOR = '#e5ff00';
export const LINE_COLOR2 = '#03fcb1';
export const CHART_COLOR = '#9802de';
export const AXIS_COLOR = '#f20f3c';

export const CHART_WIDTH = 3 / 1;

export const CANVAS_ASPECT_RATIO = 1;
export const CANVAS_ID = 'alludfgdfg56f';

const DECIMALS = 7;

export const INIT_X = Number(prompt('X inicial'));
export const ITERATIONS_COUNT = Number(prompt('Maximo numero de iteraciones'));
export const EXPECTED_RESULT = 0.0001;

export const fix = (x: number): number =>
  Number.parseFloat(x.toFixed(DECIMALS));

export const evaluateFunction = (x: number): number => fix(x ** 3 - x - 1);
export const derivedFunction = (x: number): number => fix(3 * x ** 2 - 1);

interface ChartPoint {
  x: number;
  y: number;
}
export type ChartData = ChartPoint[];

const points: ChartData = [];
const X = 20;
for (let a = -X; a < X; a += 0.1) {
  points.push({
    x: a,
    y: evaluateFunction(a),
  });
}
export const initialPoints = points;
