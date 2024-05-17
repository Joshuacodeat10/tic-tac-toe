import { useEffect, useState } from 'react'
function App() {
  
  let [playerr, setPlayer] = useState(
  ['','','',
   '','','',
   '','','']
  )
  //   let [playerr, setPlayer] = useState(['','','','']
  // )
  //Useeffect for detecting when someones wins the game, did this to bypass useStates asychronous updates
  useEffect(( )=>{
    findDraw();
    checkWin();
  }, [playerr])
  const [hasWon, setHasWon] = useState(false)
  //To set the text a player sees when they win
  const[wintext, setWinText]= useState('');
  //Usestate variable For toggling between letters
  const [toggleplayer, setTogglePlayer] = useState(true)
  //For settin the letter, works with the toggling function
  const[letter, setLetter] = useState('X')
  const [playerNames, setPlayersName] = useState(['X','O'])
  const[player1Score, SetPlayer1Score] = useState(0)
  const[player2Score, SetPlayer2Score] = useState(0)
  //toggle function
  function changePlayerName(event, number){
    const newPlayerNames= [...playerNames]; 
    newPlayerNames[number] = event.target.value; 
    setPlayersName(newPlayerNames)
  }
  const handleClick = () =>{
    // array that contains the two playable options, X or O 
    const array=['X','O']
    // Code that sets the current letter to X by default
    setLetter(array[0])   
    // This toggles the current letter between X and O*
    setTogglePlayer(toggleplayer => !toggleplayer)
    if (!toggleplayer){
      setLetter(array[0])
      console.log(toggleplayer)
    }
    if (toggleplayer){
      setLetter(array[1])
      console.log(toggleplayer)
    }
    console.log(toggleplayer)
  }
  
  const checkWin = () =>{    
    if(playerr[0] !== ''){
      if(playerr[0] === playerr[0]  && playerr[1] === playerr[0] && playerr[2]  === playerr[0] ){
        if(hasWon === false){
        setHasWon(true)
        setLetter('')
        if(playerr[0] === 'X'){
          SetPlayer1Score(count => count+1)
          setWinText(playerNames[0] +  '  Wins')
        }
        if(playerr[0] === 'O'){
          SetPlayer2Score(count => count+1)
          setWinText(playerNames[1] +  '  Wins')
        }
      }
      }
      if(playerr[0]  === playerr[0] && playerr[4]  === playerr[0] && playerr[8]  === playerr[0]){
        if(hasWon === false){
        
        setLetter('')
       
        setHasWon(true)
        if(playerr[0] === 'X'){
          SetPlayer1Score(count => count+1)
          setWinText(playerNames[0] +  '  Wins')
        }
        if(playerr[0] === 'O'){
          SetPlayer2Score(count => count+1)
          setWinText(playerNames[1] +  '  Wins')
        }
      }
      }
      if(playerr[0]  === playerr[0] && playerr[3]  === playerr[0] && playerr[6]  === playerr[0]){
        if(hasWon === false){
        setHasWon(true)
         setLetter('')
         if(playerr[0] === 'X'){
          SetPlayer1Score(count => count+1)
          setWinText(playerNames[0] +  '  Wins')
        }
        if(playerr[0] === 'O'){
          SetPlayer2Score(count => count+1)
          setWinText(playerNames[1] +  '  Wins')
        }
      }
      }
    }
    if(playerr[1] !== ''){
      if(playerr[1]  === playerr[1] && playerr[4]  === playerr[1] && playerr[7]  === playerr[1]){
        if(hasWon === false){
          setLetter('')
          setHasWon(true)
          if(playerr[1] === 'X'){
            SetPlayer1Score(count => count+1)
            setWinText('plae' +  '  Wins')
          }
          if(playerr[1] === 'O'){
            SetPlayer2Score(count => count+1)
            setWinText(playerNames[1] +  '  Wins')
          }
        }
      }
    }
    if(playerr[3] !== ''){
      if(playerr[3]  === playerr[3] && playerr[4]  === playerr[3] && playerr[5]  === playerr[3]){
        if(hasWon === false){
        setLetter('')
        setHasWon(true)
        if(playerr[3] === 'X'){
          SetPlayer1Score(count => count+1)
          setWinText(playerNames[0] +  '  Wins')
        }
        if(playerr[3] === 'O'){
          SetPlayer2Score(count => count+1)
          setWinText(playerNames[1] +  '  Wins')
        }
        
      }
    }
    }
    if(playerr[2] !== ''){

      if(playerr[2]  === playerr[2] && playerr[4]  === playerr[2] && playerr[6] === playerr[2]){
        if(hasWon === false){
        setLetter('')
        setHasWon(true)
        if(playerr[2] === 'X'){
          SetPlayer1Score(count => count+1)
          setWinText(playerNames[0] +  '  Wins')
        }
        if(playerr[2] === 'O'){
          SetPlayer2Score(count => count+1)
          setWinText(playerNames[1] +  '  Wins')
        }
      }
      }
      
      if(playerr[2]  === playerr[2] && playerr[5]  === playerr[2] && playerr[8]  === playerr[2]){
        if(hasWon === false){
          setHasWon(true)
          setLetter('')
          if(playerr[2] === 'X'){
            SetPlayer1Score(count => count+1)
            setWinText(playerNames[0] +  '  Wins')
          }
          if(playerr[2] === 'O'){
            SetPlayer2Score(count => count+1)
            setWinText(playerNames[1] +  '  Wins')
          }
      }
      
      }
    }
    if(playerr[6] !== ''){
      if(playerr[6]  === playerr[6] && playerr[7]  === playerr[6] && playerr[8]  === playerr[6]){
        if(hasWon === false){
        setLetter('')
        setHasWon(true)
        if(playerr[6] === 'X'){
          SetPlayer1Score(count => count+1)
          setWinText(playerNames[0] +  '  Wins')
        }
        if(playerr[6] === 'O'){
          SetPlayer2Score(count => count+1)
          setWinText(playerNames[1] +  '  Wins')
        }
        
        }
      }
    }
  }
  const UpdateState = (name) => {
    if(playerNames[0]  === ''){
    alert('Make sure to type player X name')
    }
    if(playerNames[1]  === ''){
      alert('Make sure to type player 2s name')
    }
    
     else{
     
   setWinText('')
   //Code for updating each of the tic tac toe's rows and columns, when clicked */
    if(name===0){
      if(playerr[0] === ''){
        if(hasWon === false){
          console.log('yeah')
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
    
    }
    if(name===1){
      
      if(playerr[1] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        } 
      }
      
    }
    if(name===2){
      if(playerr[2] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
      
    }
    if(name===3){
      if(playerr[3] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
      
    }
    if(name===4){
      if(playerr[4] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
     
    }
    if(name===5){
      if(playerr[5] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
      
    }
    if(name===6){
      if(playerr[6] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
     
    }
    if(name===7){
      if(playerr[7] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }
      
    }
    if(name===8){
      if(playerr[8] === ''){
        if(hasWon === false){
          handleClick();
          //Code for updating the rows and colmns to the current letter, which is X or O. 
 
          const newTodos=[...playerr];
          newTodos[name] = letter;
          setPlayer( newTodos);
        }
      }

    }
     }
  }
  /*function for finding when a draw happens */
  const findDraw= () =>{
    if( hasWon === false && playerr[0] !== '' && playerr[1] !== '' && playerr[2] !== '' && playerr[3] !== '' && playerr[4] !== '' && playerr[5] !== '' && playerr[6] !== '' && playerr[7] !== '' && playerr[8] !== '' ){
      setWinText('It is a shameful draw')

    }
  }
  /*function for restarting the game */
  const restartGame =() =>{
    setWinText('Next Round')
    setHasWon(false)
    setLetter('X')
    setTogglePlayer(true)
    setPlayer(
  ['','','',
   '','','',
   '','','']
    )
  }
  return (
    <>
  
    <div className="scorecounter">
      <div className='nameHandler'>
        {/*Input for changing the name of player 1 */}
        <h1>Enter Player X Name</h1>
        <div className={`scores ${toggleplayer ?  'underline' : ''}`}>
            <input 
              className="bold" 
              value={playerNames[0]} 
              onChange={(event) => {changePlayerName(event, 0)}}
              type='text'
              
            />
            <p>{player1Score}</p>
        </div>
      </div>
      <div className='nameHandler'>
        {/*Input for changing the name of player 2 */}
        <h1>Enter Player O Name</h1>
        <div className={`scores ${!toggleplayer ?  'underline' : ''}`}>
        <input 
              className="bold" 
              value={playerNames[1]} 
              onChange={(event) => {changePlayerName(event, 1)}}
              type='text'
              
            />
            <p>{player2Score}</p>
        </div>
      </div>
      </div>    

    <h1>{wintext}</h1>
      {/*Grid where the tic tac toe is displayed*/}
      <div className="grid">
        <div onClick={()=>{UpdateState(0);}} className="item corners"><p>{playerr[0]}</p></div>
        <div onClick={()=>{UpdateState(1);}} className="item"><p>{playerr[1]}</p></div>
        <div onClick={()=>{UpdateState(2);}} className="item"><p>{playerr[2]}</p></div>
        <div onClick={()=>{UpdateState(3);}} className="item corners"><p>{playerr[3]}</p></div>
        <div onClick={()=>{UpdateState(4);}} className="item"><p>{playerr[4]}</p></div>
        <div onClick={()=>{UpdateState(5);}} className="item"><p>{playerr[5]}</p></div>
        <div onClick={()=>{UpdateState(6);}} className="item corners bottom"><p>{playerr[6]}</p></div>
        <div onClick={()=>{UpdateState(7);}} className="item bottom" ><p>{playerr[7]}</p></div>
        <div onClick={()=>{UpdateState(8);}} className="item bottom"><p>{playerr[8]}</p></div>
       </div>
       <button className="restart" onClick={restartGame}>Restart game</button>
       <p></p>
    </ >
  )
}

export default App;
