import React from 'react'
import axios from 'axios'
import moment from 'moment'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

class Character extends React.Component {
  state = {
    character: {
      
    },
  }

  UNSAFE_componentWillMount() {
    axios.get(`https://rickandmortyapi.com/api/character/${this.props.match.params.id}`)
    .then(res => {
      let character = res.data
      let location = res.data.location.name
      let origin = res.data.origin.name
      this.setState({character})
      this.setState({location})
      this.setState({origin})   
    }).catch(err => {
        console.log(err);
    })
  }

  render() {
  console.log(this.props.match.params.id);
    return(
        <Container>
          <div style={{display:'grid',gridTemplateColumns:'33% 30% 33%'}}>
            <div></div>
            <Image src={this.state.character.image}/>
            <div></div>
          </div>
          <Text>
            <Label>This is </Label> {this.state.character.name}. <Label> Created on</Label> {moment(this.state.character.created).format('LLLL')}. <Label> Gender is </Label> {this.state.character.gender}. <Label>Currently located on </Label> {this.state.location}. <Label>Originally from </Label> {this.state.origin}. <Label>Of species </Label> {this.state.character.species} <Label>Last known status: </Label> {this.state.character.status}
          </Text>
          <Link to={`${'/'}`}><Button>GO BACK</Button></Link>
        </Container>
      )
    }
  }  


export default Character

const Container = styled.div({
  width:'75%',
  marginLeft:'auto',
  marginRight:'auto'
});

const Image = styled.img({
  marginTop: '10%'
});

const Label = styled.p({
  fontSize:22,
  fontFamily:'Courier, sans-serif',
  fontWeight:'lighter',
  display: 'inline-block'
});

const Text = styled.p({
  fontSize:32,
  fontFamily:'Helvetica, sans-serif',
  fontWeight: 'bold',
});

const Button = styled.button({
  color: 'white',
  background: '#477998',
  fontSize: 14,
  width: '200px',
  height: '30px',
  border: '1px solid transparent',
  borderRadius: '6px',
  boxShadow: '1px 1px 4px #291F1E',
  marginLeft:'36%',
  marginTop:'25px',
  "&:hover": {
      opacity: 0.6,
      cursor: 'pointer'
    },
});

