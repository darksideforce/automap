import p5 from "p5";
import { useEffect, useRef } from "react";

function P5Components(props) {
  let { sketch } = props
  let refP5 = useRef(0)
  const defaultSketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(100, 100);
    };
    p5.draw = () => {
      p5.background(0);
    };
  }
  //类似mounted的步骤
  useEffect(() => {
    let el = refP5;
    let p5cv = new p5(sketch || defaultSketch, el);
    //this.emit("created", p5cv);
    //console.log('打印了p5')
  })
  return <div id="p5"
    ref={(el) => {
      refP5 = el;
    }}>
  </div>
}
export default P5Components
