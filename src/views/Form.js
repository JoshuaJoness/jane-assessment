import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../components/Nav'

const Form = () => {
  const [email, setEmail] = useState('')
  const [mode, setMode] = useState('')
  const [language, setLanguage] = useState('')
  const [checked, setChecked] = useState(false)
  const lightModeChecked = mode == 'light' ? true : false
  const darkModeChecked = mode == 'dark' ? true : false

  const submit = (e) => {
    e.preventDefault()
    if (email && mode && language && checked) {
        console.log(email, mode, language, checked);
        setEmail('')
        setMode('')
        setLanguage('')
        setChecked(false)
    } else {
      alert('You need to complete all parts of the form')
      }
   }

  return(
    <div style={{display:'flex', flexDirection:'column'}}>
      <Nav />
      <Title>DEVELOP WITH US!</Title>
      <FormContainer style={{display:'flex', flexDirection:'column'}}>
        <Label>Please enter your email</Label>
        <TextInput 
          type='text' 
          value={email} 
          onChange={e => {setEmail(e.target.value)}} 
          placeholder='myname@email.com'
        />

        <Label>Light-mode or Dark-mode?</Label>
        <div style={{display:'flex'}}>     
          <RadioLabel>Light-mode</RadioLabel>
          <input 
            type="radio"
            value="light"
            name="mode"
            checked={lightModeChecked}
            onChange={e => setMode(e.target.value)}
            style={{marginLeft:'auto',marginRight:'auto'}}
          />
        </div>    
        <div style={{display:'flex'}}>
           <RadioLabel>Dark-mode</RadioLabel>
           <input 
             type="radio" 
             value="dark"
             name="mode"
             checked={darkModeChecked}
             onChange={e => setMode(e.target.value)}
             style={{marginLeft:'auto',marginRight:'auto'}}
           />
        </div>

        <Label>Your favorite programming language: </Label>
        <Select value={language} onChange={e => setLanguage(e.target.value)}>
          <option disabled value=''>Select a language</option>
          <option value='javascript'>JavaScript</option>
          <option value='golang'>Golang</option>
          <option value='python'>Python</option>
          <option value='php'>PHP</option>
        </Select>

        <div style={{display:'flex', alignItems:'center', marginTop:'7%', marginLeft:'5%', marginRight:'5%'}}>
          <input 
            type="checkbox"
            checked={checked}
            onChange={e => setChecked(!checked)}
          />
          <p style={{fontFamily:'Helvetica, sans-serif', marginLeft:'5%'}}>By checking this box you consent to be sent endless amounts of unwarrented emails!</p>
        </div>
        <Button onClick={submit}>SUBMIT</Button>
      </FormContainer>
    </div>
  )
}

const FormContainer = styled.form({
  width: '500px',
  height: '700px',
  background: '#d3d3d3',
  margin: '10px',
  borderRadius: '10px',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '10%'
});

const Title = styled.p({
  color:'#2D1115',
  fontSize:38,
  fontFamily:'Helvetica, sans-serif',
  fontWeight:'bold',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'5%'
});

const Label = styled.div({
  fontSize:18,
  fontFamily:'Helvetica, sans-serif',
  fontWeight:'bold',
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'10%',
  marginBottom:'5%'
});

const RadioLabel = styled.div({
  fontSize:18,
  fontFamily:'Helvetica, sans-serif',
  marginLeft:'auto',
  marginRight:'auto'
});

const TextInput = styled.input({
  display:'block',
  width:'200px',
  height:'30px',
  borderRadius:'4px',
  border:'none',
  marginLeft:'auto',
  marginRight:'auto',
  alignText:'center',
  paddingLeft:17,
  fontSize:18
});

const Select = styled.select({
  fontSize: 14,
  width: '200px',
  height: '30px',
  border: '1px solid transparent',
  borderRadius: '4px',
  marginLeft:'auto',
  marginRight:'auto',
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
  marginLeft:'auto',
  marginRight:'auto',
  marginTop:'25px',
  "&:hover": {
      opacity: 0.6,
      cursor: 'pointer'
    },
});


export default Form
