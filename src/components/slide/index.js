import SlideItem from "../slide-item"
import { useState } from "react"
import { SlideWrapper } from "./style"
const Slide = () =>{
  const [itemList,setItemList] = useState([
    { name:'基础设置',color:'#6584b3'},
    { name:'风格',color:'#dc9360'},
    { name:'特殊点',color:'#93cbba'},
    { name:'奇异点',color:'#b4aa92'},
    { name:'大陆',color:'#e4dfba'},
    { name:'海洋',color:'#c4db5d'},
    { name:'森林',color:'#7c9878'},
    { name:'账号设置',color:'#eeffd0'},
  ])
  return (
    <SlideWrapper>
      {
        itemList.map((item,index)=>
        <SlideItem items={item}
          key={index}
        ></SlideItem>
      )
      }
    </SlideWrapper>
    
  )
}


export default Slide