import styled from 'styled-components';

export const SlideItemWrapper = styled.div`
  width:500px;
  height:12.5%;
  div{
    background-color:${props => props.color};
    border-radius:0px 60px 60px 0px;
    width:300px;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .longer{
    animation: longer 300ms ease-in-out forwards;
  }
  .smaller{
    animation: smaller 300ms ease-in-out forwards;
  }
  @keyframes longer {
    0% {
      width:300px
    }
    60%{
      width:450px;
    }
    80%{
      transform: scaleX(1.06);
    }
    100% {
      width: 450px;
    }
  }
  @keyframes smaller {
    0% {
      width:450px
    }
    40
    100% {
      width: 300px;
    }
  }
`

