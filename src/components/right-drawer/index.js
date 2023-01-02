import { RightDrawerWrapper } from "./style"
import foldUrl from '../../assets/images/unfold.png'
import { useState } from "react"
const RightDrawer = (props) => {
  let {center} = props
  const [rotate,changeRotate] = useState(true)
  //修改旋转
  const handleClickRotate = () =>{
    changeRotate(!rotate)
  }
  return (
    <RightDrawerWrapper>
      <div className={rotate?'fold Drawer':'unfold Drawer'}>
        <div className="Click" onClick={handleClickRotate}>
          <img src={foldUrl} ></img>
        </div>
        <div className="Drawer-center">
          { center}
        </div>
      </div>
    </RightDrawerWrapper>
  )
}

export default RightDrawer