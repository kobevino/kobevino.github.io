import { useRef, useEffect, useState, useCallback } from 'react';
import Logo from 'libs/canvas/logo';
import WebFont from 'webfontloader';

import style from './style';

const FrontendArt = () => {
  const texts = ['Javascript', 'SCSS', 'Typescript', 'React', 'Webpack', 'Rollup', 'D3.js', 'Next.js', 'Node.js', 'Jenkins'];
  const logoRef = useRef<HTMLElement>(null);
  const typingRef = useRef<HTMLSpanElement>(null);
  const [text, setText] = useState('Javascript');

  const changeText = (e: AnimationEvent) => {

    const str = (e.elapsedTime / 5).toString();
    const idx = Number(str[str.length - 1]);

    if (e.elapsedTime % 5 === 0) {
      setText(texts[idx]);
    }
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Hind:700']
      },
      fontactive: () => {
        if (logoRef.current === null) return;
        new Logo(logoRef.current);
      }
    });
  }, []);

  useEffect(() => {
    typingRef.current?.addEventListener('animationiteration', changeText); 

    return () => {
      typingRef.current?.removeEventListener('animationiteration', changeText); 
    }
  }, []);

  return (
    <section ref={logoRef} css={style.wrapper}>
      <div css={style.container}>
        <p css={style.text}>
          I Can do <span ref={typingRef} css={style.typing}>{text}</span>.
        </p>
      </div>
    </section>
  );
}

export default FrontendArt;
