import { AXIS_COLOR, CHART_WIDTH, CHART_COLOR, ChartData } from './configs';

interface LineCartProperties {
  canvasId: string;
  minX: number;
  minY: number;
  maxX: number;
  maxY: number;
  initialChart: ChartData;
}
export default class LineCart {
  private canvas: HTMLCanvasElement;
  private minX: number;
  private minY: number;
  private maxX: number;
  private maxY: number;
  private initialChart: ChartData;

  private context: CanvasRenderingContext2D | null;
  private rangeX: number;
  private rangeY: number;

  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private scaleX: number;
  private scaleY: number;
  private padding: number;

  constructor(con: LineCartProperties) {
    this.initialChart = con.initialChart;

    this.canvas = document.getElementById(con.canvasId) as HTMLCanvasElement;
    // x/y axis min value
    this.minX = con.minX;
    this.minY = con.minY;
    // x/y axix max value
    this.maxX = con.maxX;
    this.maxY = con.maxY;

    this.padding = 0;
    // this.font = '12pt :stringCalibri';

    // this.fontHeight = 12;

    // relationships
    this.context = this.canvas.getContext('2d');
    this.rangeX = this.maxX - this.minY;
    this.rangeY = this.maxY - this.minY;

    this.x = this.padding;
    this.y = this.padding;
    this.width = this.canvas.width - this.padding * 2;
    this.height = this.canvas.height - this.padding * 2;
    this.scaleX = this.width / this.rangeX;
    this.scaleY = this.height / this.rangeY;

    // draw x y axis and tick marks
    this.drawXAxis();
    this.drawYAxis();
    this.drawLine(this.initialChart);
  }

  private drawXAxis = () => {
    const context = this.context;
    context!.save();
    context!.beginPath();
    context!.moveTo(this.x, this.y + this.height / 2);
    context!.lineTo(this.x + this.width, this.y + this.height / 2);
    context!.strokeStyle = AXIS_COLOR;
    context!.stroke();

    context!.restore();
  };
  private drawYAxis = () => {
    const context = this.context;
    context!.save();
    context!.beginPath();
    context!.moveTo(this.x + this.width / 2, this.y);
    context!.lineTo(this.x + this.width / 2, this.y + this.height);
    context!.strokeStyle = AXIS_COLOR;
    context!.stroke();
    context!.restore();

    context!.restore();
  };
  public drawLine = (data: ChartData, color: string = CHART_COLOR) => {
    const context = this.context;
    context!.save();
    this.transformContext();
    context!.lineWidth = CHART_WIDTH;
    context!.strokeStyle = color;
    context!.fillStyle = color;
    context!.beginPath();
    context!.moveTo(data[0].x * this.scaleX, data[0].y * this.scaleY);

    for (let n = 0; n < data.length; n++) {
      var point = data[n];

      // draw segment
      context!.lineTo(point.x * this.scaleX, point.y * this.scaleY);
      context!.stroke();
      context!.closePath();
      context!.beginPath();
      // context!.arc(
      //   point.x * this.scaleX,
      //   point.y * this.scaleY,
      //   this.pointRadius,
      //   0,
      //   2 * Math.PI,
      //   false
      // );
      context!.fill();
      context!.closePath();

      // position for next segment
      context!.beginPath();
      context!.moveTo(point.x * this.scaleX, point.y * this.scaleY);
    }
    context!.restore();
  };
  reDrawnChart = () => {
    this.context?.clearRect(0, 0, this.width, this.height);
    this.drawXAxis();
    this.drawYAxis();
    this.drawLine(this.initialChart);
  };
  private transformContext = () => {
    const context = this.context;
    this.context!.translate(this.x + this.width / 2, this.y + this.height / 2);
    context!.scale(1, -1);
  };
}
