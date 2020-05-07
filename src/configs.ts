export const ANIMATION_DURATION = 1000; /// miliseconds

export const LINE_COLOR = '8E1600';

export const CANVAS_ASPECT_RATIO = 3 / 1;
export const CANVAS_ID = 'xdfgndhjthfghfghfgh';

export const DECIMALS = 4;

export const evaluateFunction = (x: number): number => {
  // Function to use in
  return Number.parseFloat((x ** 3 - x - 1).toFixed(DECIMALS));
};
export const derivedFunction = (x: number): number => {
  return Number.parseFloat((3 * x ** 2 - 1).toFixed(DECIMALS));
};
