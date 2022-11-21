import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  .pixel {
    width: 0.825rem;
    height: 0.825rem;
    cursor: pointer;
    background: #fff;
    pointer-events: visible;
    user-select: none;
    -webkit-user-drag: none;
  }
`;
