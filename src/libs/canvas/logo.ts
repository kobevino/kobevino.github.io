let canvas: HTMLCanvasElement;
let ctx: CanvasRenderingContext2D;
let sw: number, sh: number;

const PIXEL_RATIO = 2;
const FONT_SIZE = 15;
const FONT_WEIGHT = 700;
const FONT_NAME = 'Hind';
const X_AXIS = 15;
const Y_AXIS = 20;
let line = 1;
let speed = 200;
let text = 'KOBEVINO';

function drawLogo(target: HTMLElement) {
  canvas = document.createElement('canvas');
  ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  sw = document.body.clientWidth;
  sh = document.body.clientHeight;

  canvas.width = sw * PIXEL_RATIO;
  canvas.height = sh * PIXEL_RATIO;
  canvas.style.width = sw + 'px';
  canvas.style.height = sh + 'px';
  ctx.scale(PIXEL_RATIO, PIXEL_RATIO);

  ctx.strokeStyle = ctx.fillStyle = '#fff';
  ctx.font = `${FONT_WEIGHT} ${FONT_SIZE}px ${FONT_NAME}`;
  ctx.textBaseline = 'middle';

  animate();
  
  target.appendChild(canvas);
}

function animate() {
  ctx.clearRect(0, 0, sw, sh);
  
  ctx.setLineDash([line, speed]);
  ctx.strokeText(text, X_AXIS, Y_AXIS);

  line += 1;
  speed -= 1;

  if (speed <= 0) {
    ctx.fillText(text, X_AXIS, Y_AXIS);
    setTimeout(() => {
      line = 1;
      speed = 200;
      requestAnimationFrame(animate);
    }, 2000);
  } else {
    requestAnimationFrame(animate);
  }
}

export { drawLogo };