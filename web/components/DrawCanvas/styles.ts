import styled from "styled-components";

/*
export const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;
*/


export const Canvas = styled.div<{ w: number; h: number }>`
  margin-top: 30vh;
  width: calc(${(props) => 0.825 * (props.w + 1)}rem);
  height: calc(${(props) => 0.825 * props.h}rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-flow: wrap;
  padding: 2px 0 2px 2px;
  z-index: 999;
`;
