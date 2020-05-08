export const ANIMATION_DURATION = 700; /// miliseconds

export const LINE_COLOR = '#e5ff00';
export const LINE_COLOR2 = '#03fcb1';
export const CHART_COLOR = '#9802de';
export const CHART_WIDTH = 3 / 1;
export const AXIS_COLOR = '#f20f3c';

export const CANVAS_ASPECT_RATIO = 1;
export const CANVAS_ID = 'xdfgndhjthfghfghfgh';

export const DECIMALS = 4;
export const ITERATIONS_COUNT = 20;

const fix = (x: number): number => Number.parseFloat(x.toFixed(DECIMALS));

export const evaluateFunction = (x: number): number => fix(x ** 3 - x - 1);
export const derivedFunction = (x: number): number => fix(3 * x ** 2 - 1);

interface ChartPoint {
  x: number;
  y: number;
}
export type ChartData = ChartPoint[];
