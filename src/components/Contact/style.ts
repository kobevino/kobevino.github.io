import { css, keyframes } from '@emotion/react';
import { mqMinWidth } from 'styles/breakpoint';

const bounce = keyframes`
  100% {
    top: -5px;
    box-shadow: 0 50px 25px rgba(0, 0, 0, .2);
  }
`;

export default {
  section: css`
    position: relative;
  `,
  container: css`
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    text-align: center;
    width: 100%;
  `,
  round: css`
    display: inline-block;
    position: relative;
    top: 5px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin: 12px 30px;
    cursor: pointer;
    overflow: hidden;
    isolation: isolate;
    animation: ${bounce} .3s ease-in-out infinite alternate;
    box-shadow: 0 0px 10px rgba(0, 0, 0, .4);
    ${mqMinWidth[1]} {
      width: 200px;
      height: 200px;
    }
    a > div {
        background-color: #fff;
      }
    &:nth-of-type(1) {
      animation-delay: .1s;
      background-color: #fff;
    }
    &:nth-of-type(2) {
      animation-delay: .2s;
      background: #3a559f;
    }
    &:nth-of-type(3) {
      animation-delay: .3s;
      background-color: #50abf1;
    }
    &:nth-of-type(4) {
      animation-delay: .4s;
      background-color: #0077b7;
    }
    &:hover {
      animation-play-state: paused;
    }
  `,
  link: css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
  `

}