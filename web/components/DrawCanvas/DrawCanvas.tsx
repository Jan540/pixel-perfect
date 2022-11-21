import React, { useEffect, useRef } from "react";
import { Canvas} from "./styles";

import createPixels from "./scripts/createPixels";
import canvasEventsHandler from "./scripts/canvasEvents";


function DrawCanvas({ w, h }: { w: number; h: number }): JSX.Element {
  const containerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const ref: HTMLDivElement = containerRef.current;
    const pixels = createPixels(w, h);

    ref.append(...pixels);
    canvasEventsHandler(ref);
  }, []);

  return (
      <Canvas ref={containerRef} w={w} h={h} />
  );
}
export default DrawCanvas;
