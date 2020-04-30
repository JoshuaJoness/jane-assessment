import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Nav from '../components/Nav'
import Menu from '../components/Menu'
import globalStyles from '../global.css'


const Home = () => {
  const [characters, setCharacters] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
    .then(res => {
      console.log(res.data.results);
      setCharacters(res.data.results)
    }).catch(err => {
      console.log(err);
      })
  }, [])

  return(
    <div>
      <Nav style={{padding:0, margin:0}} drawerToggle={() => setShowDrawer(!showDrawer)}/>
{showDrawer ? <Menu /> : null}
      <div style={styles.charactersContainer}>
      {
        characters.map((character, index) => {
          return <Card 
                  key={index} 
                  name={character.name} 
                  image={character.image} 
                  species={character.species} 
                  id={character.id} 
                 />
        })
      }
      </div>    
    </div>
  )
}

const styles = {
  charactersContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    width: '75%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5%',
    marginBottom: '10%'
  }
}

export default Home