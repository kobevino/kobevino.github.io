import { css } from '@emotion/react';
import color from 'styles/color';

export default {
  wrapper: css`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    & > section {
      width: 100%;
      height: 100%;
      scroll-snap-align: center;
    }

    & > section:first-of-type {
      background: #000;
    }
    & > section:nth-of-type(2) {
      background: ${color.pastel.pink};
    }
    & > section:nth-of-type(3) {
      background: ${color.pastel.yellow};
    }
    & > section:nth-of-type(4) {
      background: ${color.pastel.lightGreen};
    }
    & > section:nth-of-type(5) {
      background: ${color.pastel.green};
    }
  `,
}