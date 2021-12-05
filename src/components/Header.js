import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {selectCars} from "../features/cars/carSlice";
import {useSelector} from "react-redux";



function Header() {
  
    const [burgerState,setburgerState] = useState(false);
    const cars = useSelector(selectCars);


    return (
        <div>
           <Container>
                <img src="/images/logo.svg" alt="" />
          
                <Menu>
                    {cars && cars.map((car,index) => (
                           <a key={index} href="#">{car}</a>
                    ))}
           
              
           </Menu>
           <RightMenu>
           <a href="#">Shop</a>
            <a href="#">Tesla Account</a>

           <CustomMenu onClick={() =>setburgerState(true)}/>
           </RightMenu>
           <BurgerNav show={burgerState}>
               <CloseWrapper >
               <CustomClose onClick={() =>setburgerState(false)} />
               </CloseWrapper>
               {cars && cars.map((car,index) => (
                               <li key={index}><a href="#">{car}</a></li>
                    ))}
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
               <li><a href="#">Existing Inventory</a></li>
           </BurgerNav>

        
           </Container>
          
        </div>
    )
}

export default Header

const Container = styled.div`
  min-height:30px;
  position:fixed;
  display:flex;
  align-item:center;
  justify-content:space-between;
  padding: 5px 20px;
  top:0;
  left:0;
  right:0;
  z-index:1;

`

const Menu = styled.div`
 display:flex;
 padding-top:10px;
 align-items:center;
 justify-content:center;
 flex:1;
 a{
     font-weight:600;
     color:black;
     text-transform:uppercase;
     padding:0 10px;
     flex-wrap:nowrap;
    }

    @media(max-width:786px) {
        display:none;
    }

`
const RightMenu = styled.div`
display:flex;
padding-top:10px;
align-items:center;
a{
    font-weight:600;
    color:black;
    text-transform:uppercase;
    margin-right:10px;
    flex-wrap:nowrap;
   }
`
const CustomMenu = styled(MenuIcon)`
 cursor:pointer;
 font-weight:600;

`
const BurgerNav  = styled.div`
 right:0;
 position:fixed;
 top:0;
 bottom:0;
 background:white;
 width:300px;
 list-style:none;
 z-index:16;
 padding:20px;
 display:flex;
 flex-direction:column;
 text-align:start;
 transform: ${props => props.show ?'translateX(0)' : 'translateX(100%)'};
 transition:transform 0.3s ease-in;
     li{
       padding: 15px 0;
       border-bottom: 1px solid rgba(0,0,0,.2);
         a{
             color:black;
             font-weight:500;
         }
     }

  
`
const CustomClose = styled(CloseIcon)`
 cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`;