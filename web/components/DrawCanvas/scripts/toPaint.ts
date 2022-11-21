import { ConfigProps } from "../../../types/Config";

function toPaint(pixel: HTMLDivElement): void {
  const config: ConfigProps = JSON.parse(
    window.localStorage.getItem("config") || "{}"
  );

  if (!config.mouseDown) return;
  if (config.eraser) {
    pixel.style.backgroundColor = "#30303099";
  } 
  else {
    pixel.style.backgroundColor = "black";
    pixel.setAttribute("data-color", "black");
  }
}
export default toPaint;
