import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Card = ({ name, image, species, id }) => {
  return(
    <Container>
       <Image src={image}/>
        <TextContainer>
          <Text><b>Name: </b>{name}</Text>
          <Text><b>Species: </b>{species}</Text>
          <Link 
            to={`${'/character'}/${id}`} 
            style={{marginLeft:'auto', marginRight:'auto', width:'80px'}}
          >
            <Button>More info</Button>
          </Link>
        </TextContainer>    
    </Container>
  )
}

const Container = styled.div({
  width: '300px',
  height: '370px',
  background: 'palevioletred',
  margin: '10px',
  borderRadius: '10px',
  "&:hover": {
      opacity: 0.7
    },
});

const Image = styled.img({
  height: '175px',
  width: '100%',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
});

const TextContainer = styled.div({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px'
});

const Text = styled.div({
  alignSelf: 'center',
  margin: '10px',
  fontFamily: 'Helvetica, sans-serif',
  fontSize: 18
});

const Button = styled.button({
  color: 'black',
  fontSize: 14,
  height: '30px',
  border: '1px solid white',
  borderRadius: '6px',
  boxShadow: '0.5px 0.5px 4px #d3d3d3',
  marginTop:'15px',
  "&:hover": {
      background: 'black',
      color: 'papayawhip',
      cursor: 'pointer'
    },
});
 
export default Card