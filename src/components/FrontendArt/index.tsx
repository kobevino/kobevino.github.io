import { useRef } from "react";
import { useEffect } from "react";

const FrontendArt = () => {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return;
    const canvas = document.createElement('canvas');
    canvas.width = document.body.clientWidth * 2;
    canvas.height = document.body.clientHeight * 2;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.scale(2, 2);

    ref.current.appendChild(canvas);
  }, []);

  return (
    <section ref={ref} />
  )
}

export default FrontendArt;