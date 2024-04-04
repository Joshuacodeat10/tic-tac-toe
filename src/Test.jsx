import { useState } from 'react'


function App() {
  
  let [playerr, setPlayer] = useState('X')
  const [toggleplayer, setTogglePlayer] = useState(true)
  const [index, setIndex] = useState([{}])
  const [index1, setindex1] = useState('')
  const [index2, setindex2] = useState('')
  const [index3, setindex3] = useState('')
  const [index4, setindex4] = useState('')
  const handleClick = () =>{
    const array=['X','O']
    setPlayer(array[0])   
    setTogglePlayer(toggleplayer => !toggleplayer)
    if (!toggleplayer){
      setPlayer(array[0])
      console.log(toggleplayer)
   }
    if (toggleplayer){
      setPlayer(array[1])
      console.log(toggleplayer)
    }

    console.log(toggleplayer)
  }
  const restartGame = () => {
    setindex1('')
    setindex2('')
    setindex3('')
    setindex4('')
    setindex5('')
    setindex6('')
    setindex7('')
    setindex8('')
    setindex9('')
  }

  // const changeIndex = () => {
  
  //     setPlayer(oppositeCharacter)
  // }
  // const playgame = () =>{

  // }
  const setIndex1Player = () => {
    setindex1(playerr);
    console.log('bols')
    checkWin();
    
  }
  const checkWin = () => {
    
    
    console.log('i am checking')
    if(index1 === 'X'){
      console.log('it is I')
    }
   console.log(index1)
  
  }
  async function frunct(callback){
    
    setindex1(playerr);
   
  }
  async function function1(callback) {
    // Simulate actions of function1 with a delay
   
     
      callback("Data from function1");

      
    
    console.log(' This is index 1', index1)
  }
  async function function2(data) {
    // Perform actions of function2 (using data from function1)
    
    console.log('i am checking')
    console.log(index1)
  
      console.log("Function 2 executed with data:", data);
      if(index1 === 'X'){
        console.log('it is I')
      }
      console.log(index1)
 
  }
  const [index5, setindex5] = useState('')
  const [index6, setindex6] = useState('')
  const [index7, setindex7] = useState('')
  const [index8, setindex8] = useState('')
  const [index9, setindex9] = useState('')
  return (
    <>
    <button onClick={handleClick}>Start GAme</button>

      <div className="grid">
        <div onClick={()=>{ handleClick(); frunct(function1(function2));}} className="item corners"><p>{index1}</p></div>
        <div onClick={()=>{ handleClick(); setindex2(playerr);}}className="item">{index2}</div>
        <div onClick={()=>{ handleClick(), setindex3(playerr), checkWin();}}className="item">{index3}</div>
        <div onClick={()=>{ handleClick(), setindex4(playerr), checkWin();}}className="item corners">{index4}</div>
        <div onClick={()=>{ handleClick(); setindex5(playerr); checkWin();}}className="item">{index5}</div>
        <div onClick={()=>{ handleClick(), setindex6(playerr), checkWin();}}className="item">{index6}</div>
        <div onClick={()=>{ handleClick(), setindex7(playerr), checkWin();}}className="item corners bottom">{index7}</div>
        <div onClick={()=>{ handleClick(), setindex8(playerr), checkWin();}}className="item bottom" >{index8}</div>
        <div onClick={()=>{ handleClick(), setindex9(playerr), checkWin();}}className="item bottom">{index9}</div>
       </div>
       <button onClick={restartGame}>Restart game</button>
    </>
  )
}

export default App
import { useState } from 'react'
function App() {
  
  let [playerr, setPlayer] = useState({
 index1:'X',index2:'O',index3:'O' ,
 index4:'O',index5:'O',index6:'X',
 index7:'X',index8:'X',index9:'X'
  }
    )
  const [toggleplayer, setTogglePlayer] = useState(true)
  const checkWin = () =>{
    if(playerr.index1 && playerr.index2 && playerr.index3 ){
      console.log(playerr.index1, 'Wins')
    }
    if(playerr.index1 && playerr.index5 && playerr.index9 === playerr.index9){
      console.log(playerr.index1, 'Wins')
    }
    if(playerr.index3 && playerr.index5 && playerr.index7 === playerr.index7){
      console.log(playerr.index3, 'Wins')
    }
    if(playerr.index3 && playerr.index6 && playerr.index9 === playerr.index9){
      console.log(playerr.index3, 'Wins')
      console.log('ara')
    }
    if(playerr.index1 && playerr.index4 && playerr.index7 === playerr.index7){
      console.log(playerr.index1, 'Wins')
      console.log('aaara')
    }
    if(playerr.index7 && playerr.index8 && playerr.index9 === playerr.index9){
      console.log(playerr.index7, 'Wins')
      console.log('aasara')
    }
  }
  
  return (
    <>
    <button >Start GAme</button>

      <div className="grid">
        <div onClick={checkWin}className="item corners"><p>{playerr.index1}</p></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item corners"></div>
        <div className="item"></div>
        <div className="item"></div>
        <div className="item corners bottom"></div>
        <div className="item bottom" ></div>
        <div className="item bottom"></div>
       </div>
       <button >Restart game</button>
       <p></p>
    </>
  )
}

export default App;
