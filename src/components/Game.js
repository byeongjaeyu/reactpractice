import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './Game.css'


function Game(props) {

  let [player,changePlayer] = useState(1)

  const Board = [];

  useEffect(()=>{
    reset()
  },[props.size])

  for (let i = 0; i < props.size; i++) {
    Board.push(i)
  }

  function check(e) {
    const elemss = document.getElementsByClassName('row');
    for (let i1 = 0; i1 < props.size; i1++) {
      const temp = elemss[i1].childNodes[0].innerText
      let cnt = 0
      if (temp) {
        for (let i2 = 0; i2 < props.size; i2++) {
          if (elemss[i1].childNodes[i2].innerText != temp) {
            break;
          }
          cnt = cnt + 1;
        }
        if(cnt==props.size) {
          if (temp=="X") {
            alert('player1 승리!')
          } else {
            alert('player2 승리!')
          }
          reset()
          return;
        }
      }
    }

    for (let i1 = 0; i1 < props.size; i1++) {
      const temp = elemss[0].childNodes[i1].innerText
      let cnt = 0
      if (temp) {
        for (let i2 = 0; i2 < props.size; i2++) {
          if (elemss[i2].childNodes[i1].innerText != temp) {
            break;
          }
          cnt = cnt + 1;
        }
        if(cnt==props.size) {
          if (temp=="X") {
            alert('player1 승리!')
          } else {
            alert('player2 승리!')
          }
          reset()
          return;
        }
      }
    }

    const temp = elemss[0].childNodes[0].innerText
    let cnt = 0
    if (temp) {
      for (let i1 = 0; i1 < props.size; i1++) {
        if (elemss[i1].childNodes[i1].innerText===temp) {
          cnt = cnt + 1
        }
        else {
          break;
        }
      }
      if(cnt==props.size) {
        if (temp=="X") {
          alert('player1 승리!')
        } else {
          alert('player2 승리!')
        }
        reset()
        return;
      }
    }

    const temp1 = elemss[props.size-1].childNodes[0].innerText
    let cnt1 = 0
    if (temp1) {
      for (let i1 = 0; i1 < props.size; i1++) {
        if (elemss[props.size-i1-1].childNodes[i1].innerText===temp1) {
          cnt1 = cnt1 + 1
        }
        else {
          break;
        }
      }
      if(cnt1==props.size) {
        if (temp1=="X") {
          alert('player1 승리!')
        } else {
          alert('player2 승리!')
        }
        reset()
        return;
      }
    }
  }

  const reset = e => {
    let elemss = document.getElementsByClassName('row');
    for (let i1 = 0; i1 < props.size; i1++) {
      for (let i2 = 0; i2 < props.size; i2++) {
        elemss[i1].childNodes[i2].textContent=""
      }
    }
    changePlayer(1)
  }

  const click = e => {
    var column = e.target.id
    var row = e.target.parentNode.id
    let elem = document.getElementsByClassName('row')[row]
    let child = elem.childNodes[column]
    
    if (player == 1) {
      if (child.innerText=="") {
        child.textContent = "X"
        changePlayer(2)
      }
      else if (child.innerText=="X") {
        alert('이미 선택한 곳입니다.')
      }
      else {
        alert('상대방이 선택한 곳입니다. 다른곳을 선택하세요.')
      }
    }
    else {
      if (child.innerText=="") {
        child.textContent = "O"
        changePlayer(1)
      }
      else if (child.innerText=="O") {
        alert('이미 선택한 곳입니다.')
      }
      else {
        alert('상대방이 선택한 곳입니다. 다른곳을 선택하세요.')
      }
    }
    check()
  }


  const squares = Board.map((square,index)=>(
    <span className="Square" id={square} onClick={click}>
      
    </span>
  ))

  const squaress = Board.map((s,index) => (
    <div className="row" id={index}>
      {squares}
    </div>
  ))
    

  return (
    <div className="Game">
      <div className='playHeader'>play!</div>
      <br/><br/>
      <div>
        {player}번째 플레이어 차례입니다.
      </div>
      <br/><br/>
      {squaress}
      <br/><br/>
      <button onClick={reset}>초기화</button>
    </div>
  );
}

export default Game;



