import { useRef } from "react";
import { useEffect } from "react";
import { initLogo } from 'libs/canvas/logo';
import WebFont from 'webfontloader';

const FrontendArt = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Hind:700']
      },
      fontactive: () => {
        if (ref.current === null) return;
        initLogo(ref.current);
      }
    })
  }, []);

  return (
    <section ref={ref} />
  )
}

export default FrontendArt;


