import React, { useState } from 'react';
import { Button, Drawer } from 'react-rainbow-components';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(true)
     return(
       <div
           className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap"
       >
           <Drawer
               id="drawer-1"
               header=<p style={styles.header}>Menu</p>
               isOpen={isOpen}
               onRequestClose={() => setIsOpen(false)}
           >
              <Link to='/form' id='link'>
                <div id='menu-item' style={{background:'#d3d3d3'}}>
                  <MenuItem>We're hiring! (Just fill out our <b>form</b>)</MenuItem>
                </div>
              </Link>

              <MenuItem tyle={{marginTop:'30px'}}>Built by: <a href='http://joshuajones.io' id='jj' target='blank'>joshuajones.io</a></MenuItem>     
          </Drawer>   
       </div>
      )
     }

const styles = {
  header: {
    fontFamily:'ZCOOL KuaiLe, cursive',
    marginLeft:'auto',
    marginRight:'auto',
    fontSize:32,
    color:'#2D1115'
  }
}

const MenuItem = styled.div({
  fontFamily:'Helvetica, sans-serif',
  marginLeft:'auto',
  marginRight:'auto',
  fontSize:26,
  color:'#2D1115',
  margin:30,
  padding:10,
});

export default Menu


