import P5Components from "../p5"
import p5_func from './control'



function MapArea() {
  const created = (el) => {
    console.log(el)
  }
  const config = {
    width:500,
    height:500
  }
  const sketch = (p5) => {
    return p5_func(p5,config)
  }
  return <div id="palette">
    <P5Components sketch={sketch} created={created} />
  </div>
}


export default MapArea