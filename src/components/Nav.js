import React from 'react'
import styled from 'styled-components'
import globalStyles from '../global.css'
import { Link } from 'react-router-dom'

const Nav = ({ drawerToggle }) => {
  return(
    <>
      <NavBar>
        <i class="fas fa-bars" id='bars' style={styles.bars} onClick={drawerToggle}></i>
        <Title id='title'>Rick and Morty co.</Title>
        <Link to='/'>
          <i class="fas fa-home" id='home' style={styles.home}></i>
        </Link>
      </NavBar>
    </>
  )
}

const NavBar = styled.div({
  background:'#2D1115',
  height:'25%',
  display:'flex'
});

const Title = styled.div({
  fontFamily: 'ZCOOL KuaiLe, cursive',
  fontSize:55,
  color:'#95B46A',
  padding:20,
  marginLeft:'auto',
  marginRight:'auto'
});

const styles = {
  bars: {
    fontSize:44,
    color:'#95B46A',
    paddingLeft:'25px',
    paddingTop:'25px',
  },
  home: {
    fontSize:44,
    color:'#95B46A',
    paddingRight:'25px',
    paddingTop:'25px',
  }
}

export default Nav

