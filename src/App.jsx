import { useEffect, useState } from 'react'
function App() {
  //created objected grid for the tic tac toe game
  let [playerr, setPlayer] = useState({
    index1:'',index2:'',index3:'' ,
    index4:'',index5:'',index6:'',
    index7:'',index8:'',index9:''
  }
  )
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
  //For settin g the letter, workswith the toggling function
  const[letter, setLetter] = useState('X')
  const[player1Score, SetPlayer1Score] = useState(0)
  const[player2Score, SetPlayer2Score] = useState(0)
  //toggle function
  const handleClick = () =>{
    const array=['X','O']
    setLetter(array[0])   
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
    if(playerr.index1 !== ''){
      if(playerr.index1 === playerr.index1  && playerr.index2 === playerr.index1 && playerr.index3  === playerr.index1 ){
        if(hasWon === false){
        setHasWon(true)
       
        setWinText(playerr.index1 +  '  Wins')
        setLetter('')
        
        
        if(playerr.index1 === 'X'){
          SetPlayer1Score(count => count+1)
        }
        if(playerr.index1 === 'O'){
          SetPlayer2Score(count => count+1)
        }
      }
      }
      if(playerr.index1  === playerr.index1 && playerr.index5  === playerr.index1 && playerr.index9  === playerr.index1){
        if(hasWon === false){
        setWinText(playerr.index1 + '  Wins')
        setLetter('')
       
        setHasWon(true)
        if(playerr.index1 === 'X'){
          SetPlayer1Score(count => count+1)
        }
        if(playerr.index1 === 'O'){
          SetPlayer2Score(count => count+1)
        }
      }
      }
      if(playerr.index1  === playerr.index1 && playerr.index4  === playerr.index1 && playerr.index7  === playerr.index1){
        if(hasWon === false){
        setHasWon(true)
        setWinText(playerr.index1 + '  Wins')
         setLetter('')
        if(playerr.index1 === 'X'){
          SetPlayer1Score(count => count+1)
        }
        if(playerr.index1 === 'O'){
          SetPlayer2Score(count => count+1)
        }
      }
      }
    }
    if(playerr.index2 !== ''){
      if(playerr.index2  === playerr.index2 && playerr.index5  === playerr.index2 && playerr.index8  === playerr.index2){
        if(hasWon === false){
          setWinText(playerr.index2 + '  Wins')
          setLetter('')
          setHasWon(true)
          if(playerr.index2 === 'X'){
            SetPlayer1Score(count => count+1)
          }
          if(playerr.index2 === 'O'){
            SetPlayer2Score(count => count+1)
          }
        }
      }
    }
    if(playerr.index4 !== ''){
      if(playerr.index4  === playerr.index4 && playerr.index5  === playerr.index4 && playerr.index6  === playerr.index4){
        if(hasWon === false){
        setWinText(playerr.index4 +'  Wins')
        setLetter('')
        setHasWon(true)
        if(playerr.index4 === 'X'){
          SetPlayer1Score(count => count+1)
        }
        if(playerr.index4 === 'O'){
          SetPlayer2Score(count => count+1)
        }
        
      }
    }
    }
    if(playerr.index3 !== ''){

      if(playerr.index3  === playerr.index3 && playerr.index5  === playerr.index3 && playerr.index7 === playerr.index3){
        if(hasWon === false){
        setWinText(playerr.index3+ '  Wins')
        setLetter('')
        setHasWon(true)
        if(playerr.index3 === 'X'){
          SetPlayer1Score(count => count+1)
        }
        if(playerr.index3 === 'O'){
          SetPlayer2Score(count => count+1)
        }
      }
      }
      
      if(playerr.index3  === playerr.index3 && playerr.index6  === playerr.index3 && playerr.index9  === playerr.index3){
        if(hasWon === false){
          setWinText(playerr.index3+ '  Wins')
          setTogglePlayer(null)
          console.log('Yep me')
          setHasWon(true)
          if(playerr.index3 === 'X'){
            SetPlayer1Score(count => count+1)
          }
          if(playerr.index3 === 'O'){
            SetPlayer2Score(count => count+1)
          }
      }
      setLetter('')
      }
    }
    if(playerr.index7 !== ''){
      if(playerr.index7  === playerr.index7 && playerr.index8  === playerr.index7 && playerr.index9  === playerr.index7){
        if(hasWon === false){
        setWinText(playerr.index7+ '  Wins')
        setLetter('')
        setHasWon(true)
        if(playerr.index7 === 'X'){
          SetPlayer1Score(count => count+1)
        }
        if(playerr.index7 === 'O'){
          SetPlayer2Score(count => count+1)
        }
        
        }
      }
    }
  }
  const UpdateState = (name) => {
   setWinText('')
    if(name==='index1'){
      if(playerr.index1 === ''){
        if(hasWon === false){
          console.log('yeah')
          handleClick();
          setPlayer( prevState => ({...prevState, index1:letter}));
        }
      }
    
    }
    if(name==='index2'){
      
      if(playerr.index2 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index2:letter}));
        } 
      }
      
    }
    if(name==='index3'){
      if(playerr.index3 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index3:letter}));
        }
      }
      
    }
    if(name==='index4'){
      if(playerr.index4 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index4:letter}));
        }
      }
      
    }
    if(name==='index5'){
      if(playerr.index5 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index5:letter}));
        }
      }
     
    }
    if(name==='index6'){
      if(playerr.index6 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index6:letter}));
        }
      }
      
    }
    if(name==='index7'){
      if(playerr.index7 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index7:letter}));
        }
      }
     
    }
    if(name==='index8'){
      if(playerr.index8 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index8:letter}));
        }
      }
      
    }
    if(name==='index9'){
      if(playerr.index9 === ''){
        if(hasWon === false){
          handleClick();
          setPlayer( prevState => ({...prevState, index9:letter}));
        }
      }

    }
  }
  const findDraw= () =>{
    if( hasWon === false && playerr.index1 !== '' && playerr.index2 !== '' && playerr.index3 !== '' && playerr.index4 !== '' && playerr.index5 !== '' && playerr.index6 !== '' && playerr.index7 !== '' && playerr.index8 !== '' && playerr.index9 !== '' ){
      setWinText('It is a shameful draw')

    }
  }

  const restartGame =() =>{
    setWinText('Next Round')
    setHasWon(false)
    setLetter('X')
    setTogglePlayer(true)
    setPlayer({
      index1:'',index2:'',index3:'' ,
      index4:'',index5:'',index6:'',
      index7:'',index8:'',index9:''
    })
  }
  return (
    <>
  
    <div className="scorecounter">
      <div className={`scores ${toggleplayer ?  'underline' : ''}`}>
          <h2 className="bold">X</h2>
          <p>{player1Score}</p>
          
      </div>
      <div className={`scores ${!toggleplayer ?  'underline' : ''}`}>
          <h2 className="bold">O</h2>
          <p>{player2Score}</p>

      </div>
      </div>    

    <h1>{wintext}</h1>
      <div className="grid">
        <div onClick={()=>{UpdateState('index1');}} className="item corners"><p>{playerr.index1}</p></div>
        <div onClick={()=>{UpdateState('index2');}} className="item"><p>{playerr.index2}</p></div>
        <div onClick={()=>{UpdateState('index3');}} className="item"><p>{playerr.index3}</p></div>
        <div onClick={()=>{UpdateState('index4');}} className="item corners"><p>{playerr.index4}</p></div>
        <div onClick={()=>{UpdateState('index5');}} className="item"><p>{playerr.index5}</p></div>
        <div onClick={()=>{UpdateState('index6');}} className="item"><p>{playerr.index6}</p></div>
        <div onClick={()=>{UpdateState('index7');}} className="item corners bottom"><p>{playerr.index7}</p></div>
        <div onClick={()=>{UpdateState('index8');}} className="item bottom" ><p>{playerr.index8}</p></div>
        <div onClick={()=>{UpdateState('index9');}} className="item bottom"><p>{playerr.index9}</p></div>
       </div>
       <button className="restart" onClick={restartGame}>Restart game</button>
       <p></p>
    </ >
  )
}

export default App;
