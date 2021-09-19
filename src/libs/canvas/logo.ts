class Logo {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  sw: number;
  sh: number;
  private PIXEL_RATIO = 2;
  private FONT_SIZE = 15;
  private FONT_WEIGHT = 700;
  private FONT_NAME = 'Hind';
  private X_AXIS = 15;
  private Y_AXIS = 20;
  private LINE = 1;
  private SPEED = 200;
  private LOGO_TEXT = 'KOBEVINO';

  constructor(target: HTMLElement) {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d')!;
    this.sw = document.body.clientWidth;
    this.sh = document.body.clientHeight;

    this.canvas.width = this.sw * this.PIXEL_RATIO;
    this.canvas.height = this.sh * this.PIXEL_RATIO;
    this.canvas.style.width = `${this.sw}px`;
    this.canvas.style.height = `${this.sh}px`;
    this.ctx.scale(this.PIXEL_RATIO, this.PIXEL_RATIO);

    this.ctx.strokeStyle = this.ctx.fillStyle = '#fff';
    this.ctx.font = `${this.FONT_WEIGHT} ${this.FONT_SIZE}px ${this.FONT_NAME}`;
    this.ctx.textBaseline = 'middle';

    requestAnimationFrame(this.animate);

    target.appendChild(this.canvas);
  }

  animate = () => { 
    this.ctx.clearRect(0, 0, this.sw, this.sh);
    
    this.ctx.setLineDash([this.LINE, this.SPEED]);
    this.ctx.strokeText(this.LOGO_TEXT, this.X_AXIS, this.Y_AXIS);

    this.LINE += 1;
    this.SPEED -= 1;

    if (this.SPEED <= 0) {
      this.ctx.fillText(this.LOGO_TEXT, this.X_AXIS, this.Y_AXIS);
      setTimeout(() => {
        this.LINE = 1;
        this.SPEED = 200;
        requestAnimationFrame(this.animate);
      }, 2000);
    } else {
      requestAnimationFrame(this.animate);
    }
  }
}

export default Logo;