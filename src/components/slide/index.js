import SlideItem from "../slide-item"
import { useState } from "react"
import { SlideWrapper } from "./style"
const Slide = () =>{
  const [itemList,setItemList] = useState([
    { name:'地图选项1',color:'#6584b3'},
    { name:'地图选项2',color:'#dc9360'},
    { name:'地图选项3',color:'#93cbba'},
    { name:'地图选项4',color:'#b4aa92'},
    { name:'地图选项5',color:'#e4dfba'},
    { name:'地图选项6',color:'#c4db5d'},
    { name:'地图选项7',color:'#7c9878'},
    { name:'地图选项8',color:'#eeffd0'},
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