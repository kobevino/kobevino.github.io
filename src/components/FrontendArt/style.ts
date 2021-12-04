import { css, keyframes } from '@emotion/react';
import { mqMinWidth } from 'styles/breakpoint';

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: #fff }
`;

const typing = keyframes`
  0% { width: 0% } 
  25% { width: 50% } 
  50% { width: 100% } 
  75% { width: 50% } 
  100% { width: 0% }
`;

export default {
  wrapper: css`
    position: relative;
  `,
  container: css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `,
  text: css`
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #fff;
    white-space: nowrap;
    ${mqMinWidth[1]} {
      font-size: 1.8rem;
    }
    ${mqMinWidth[2]} {
      font-size: 3rem;
    }
    ${mqMinWidth[3]} {
      font-size: 5rem;
    }
  `,
  typing: css`
    display: inline-block;
    color: #fff;
    max-width: max-content;
    overflow: hidden;
    border-right: .05em solid #fff;
    white-space: nowrap;
    margin-left: 5px;
    width: 100%;
    animation: 5s ${typing} 0s steps(40, end) infinite, ${blink} .5s steps(40, end) infinite;
  `,
}