import styled from 'styled-components';

export const RightDrawerWrapper = styled.div`
  height:100%;
  width:500px;
  display:flex;
  justify-content: flex-end;
  .Drawer{
    width:100%;
    height:100%;
    background-color:#ffffff;
    box-shadow: -5px 10px 2px #eff1f5;
    position:relative
  }
  .Click{
    position: absolute;
    width:60px;
    height:60px;
    top:50%;
    transform: translateY(-50%);
    left:-30px;
    background-color:#ffffff;
    border-radius:10px;
    display:flex;
    justify-content:center;
    align-items:center;
    img{
      width:40px;
      height:40px
    }
  }
  .unfold{
    img{
      animation: unrotate 1000ms ease-in-out forwards;
    }
    animation: unfold-animation 1000ms ease-in-out forwards;
  }
  .fold{
    img{
      animation: rotate 1000ms ease-in-out forwards;
    }
    animation: fold-animation 1000ms ease-in-out forwards;
  }
  @keyframes rotate{ 
    from{ transform:rotate(360deg) } to{ transform:rotate(180deg) 
    }
  }
  @keyframes unrotate{ 
    from{ transform:rotate(180deg) } to{ transform:rotate(360deg) 
    }
  }
  @keyframes fold-animation{ 
    from{ width:75px } to{ width:500px 
    }
  }  
  @keyframes unfold-animation{ 
    from{ width:500px } to{ width:75px 
    }
  }  
}
`