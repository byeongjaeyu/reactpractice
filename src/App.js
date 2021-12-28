import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Game from './components/Game'


function App() {

  let [size,setSize] = useState(0)
  
  useEffect (() => {
    if (size>5) {
      alert('5 이하의 사이즈를 입력하세요.')
      document.getElementsByClassName("size")[0].value=5
      setSize(5)
    }
  },[size])

  const onChange = e => {
    Check(e.target.value)
  }

  const Check = n => {
    let num = n;
    setSize(num)
  }

  return (
    <div className="App">
      <Router>
      <header className="App-header">
      </header>
      <div className='Set-size'>
        사이즈를 입력하세요! [3~5]
        <br/>
        <input className="size" type="number" max={5} min={3} onChange={onChange}></input>
        
            <button>
                <Link to="/Game">play!</Link>
            </button>
            
      </div>
      <Route path="/Game"><Game size={size}></Game></Route>
      </Router>
      
     
    </div>
  );
}

export default App;



