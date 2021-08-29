import { useRef } from "react";
import { useEffect } from "react";
import Logo from 'libs/canvas/logo';
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
        new Logo(ref.current);
      }
    })
  }, []);

  return (
    <section ref={ref} />
  )
}

export default FrontendArt;


