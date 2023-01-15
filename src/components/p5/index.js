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
  useEffect(()=>init(),[])
  //初始化
  function init(){
    let el = refP5;
    let p5cv = new p5(sketch || defaultSketch, el);
    props.created(p5cv)
  }
  return <div id="p5"
    ref={(el) => {
      refP5 = el;
    }}>
  </div>
}
export default P5Components
