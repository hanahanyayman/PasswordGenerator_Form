import './App.css';
// import img from './assets/180daraga.png';
// import img2 from './assets/6.jpg';
import {useState} from 'react';
import React from 'react'
// import { SketchPicker } from 'react-color'
function App() {
  const [length,setlength]=useState(0);
  const [isNum,setisNumber]=useState('true');
  const [initaltext,setInitalText]=useState('A');
  const [isSymbol,setisSymbol]=useState('*');
  const [preferences, setPreferences] = useState({
    initialText: '',
    passwordLength: 6,
    numbers: true,
    symbols: false,
  });
  const handleGeneratingPassword=()=>{

  }
  return (
    <body className="App" >
      <div className="content">
        
        <div className="div2">
        <p className="til">
          Password Generator</p>
        <input type="resultspan" className="clip" />
        <p className="len">Password Length</p>
        <input type='number' class="num" onChange={(e)=>{setlength(e.target.value)}}/>
        <p className="len">Add Initial Text</p>
        <input type='text' class="num" onChange={(e)=>{setInitalText(e.target.value)}}/>
        <p className="len">Include Numbers</p>
        <input type='checkbox' class="num2" onChange={(e)=>{setisNumber(e.target.value)}}/>
        <p className="len">Include Symbols</p>
        <input type='checkbox' class="num2" onChange={(e)=>{setisSymbol(e.target.value)}}/>

        <button type='submit' class='generate'>Generate Password</button>
        {/* <input type="submit" value="Generate Password" class='generate'/> */}
        </div>
        
      </div>
  
       </body>
  );
}

export default App;
