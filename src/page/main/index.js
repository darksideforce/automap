
import React from 'react';
import Setting from '../../components/setting';
import Slide from '../../components/slide';
import Map from '../map/index'
import { MainWrapper } from './style'
const Main = () => {
  return (
    <MainWrapper>
      <Slide></Slide>
      <Map></Map>
      <Setting></Setting>
    </MainWrapper>
  )
};

export default Main;
