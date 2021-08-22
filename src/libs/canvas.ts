export function generateCanvas() {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

  // Define canvas size
  canvas.width = document.body.clientWidth;
  canvas.height = document.body.clientHeight;

  return {
    canvas,
    ctx,
  }
}
