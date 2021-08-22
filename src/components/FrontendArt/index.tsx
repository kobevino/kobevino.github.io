import { useRef } from "react";
import { useEffect } from "react";
import WebFont from 'webfontloader';
import { drawLogo } from 'libs/canvas/logo';

const FrontendArt = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Hind:700']
      },
      fontactive: () => {
        if (ref.current === null) return;
        drawLogo(ref.current);
      }
    })
  }, []);

  return (
    <section ref={ref} />
  )
}

export default FrontendArt;


