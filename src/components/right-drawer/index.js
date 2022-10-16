import { RightDrawerWrapper } from "./style"
import foldUrl from '../../assets/images/unfold.png'
import { useState } from "react"
const RightDrawer = (props) => {
  const [rotate,changeRotate] = useState(true)
  const handleClickRotate = () =>{
    console.log(rotate)
    changeRotate(!rotate)
  }
  return (
    <RightDrawerWrapper>
      <div className={rotate?'fold Drawer':'unfold Drawer'}>
        <div className="Click" onClick={handleClickRotate}>
          <img src={foldUrl} ></img>
        </div>
      </div>
    </RightDrawerWrapper>
  )
}

export default RightDrawer