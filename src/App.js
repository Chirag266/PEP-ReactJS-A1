// import logo from './logo.svg';
import './App.css';

import Welcome from './Welcome';
import { useState } from 'react';



const App = () => {
  const [name, setName] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)

  return (
  <>
    <h2>Enter Your name:<input type="text" id='input' onKeyUp={(e) => setName(e.target.value)}></input><button onClick={()=> setIsSubmit(true)}>login</button></h2>
    <Welcome name={name} isSubmit={isSubmit} />
  </>
  )
}


export default App;