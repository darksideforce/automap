import { useState } from "react"
import { SlideItemWrapper } from "./style"

const SlideItem = (props) =>{
  const [selected,setSelected] = useState('')
  const handleMouseMove = ()=>{
    setSelected('longer')
  }
  const handleMouseLeave = ()=>{
    setSelected('smaller')
  }
  return (
    <SlideItemWrapper 
      color={props.items.color}
    >
      <div className={selected}
        onMouseEnter={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {props.items.name}
      </div>
    </SlideItemWrapper>
  )
}


export default SlideItem