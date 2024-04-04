import { useEffect, useState } from 'react'
function App() {
  
  let [playerr, setPlayer] = useState({
    index1:'',index2:'',index3:'' ,
    index4:'',index5:'',index6:'',
    index7:'',index8:'',index9:''
  }
  )
  useEffect(( )=>{
    checkWin();
  }, [playerr])
  const[wintext, setWinText]= useState('');
  const[letter, setLetter] = useState('X')
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
  const [toggleplayer, setTogglePlayer] = useState(true)
  const checkWin = () =>{
    
  if(playerr.index1 !== ''){
    if(playerr.index1 === playerr.index1  && playerr.index2 === playerr.index1 && playerr.index3  === playerr.index1 ){
      setWinText(playerr.index1 +  '  Wins')
    }
    if(playerr.index1  === playerr.index1 && playerr.index5  === playerr.index1 && playerr.index9  === playerr.index1){
      setWinText(playerr.index1, 'Wins')
    }
    if(playerr.index1  === playerr.index1 && playerr.index4  === playerr.index1 && playerr.index7  === playerr.index1){
      setWinText(playerr.index1, 'Wins')
      console.log('aaara')
    }
  }
  if(playerr.index2 !== ''){
    if(playerr.index2  === playerr.index2 && playerr.index4  === playerr.index2 && playerr.index6  === playerr.index2){
      setWinText(playerr.index2, 'Wins')
      console.log('aaara')
    }
  }
  if(playerr.index4 !== ''){
    if(playerr.index4  === playerr.index4 && playerr.index5  === playerr.index4 && playerr.index6  === playerr.index4){
      setWinText(playerr.index4, 'Wins')
      console.log('aaara')
    }
  }
  if(playerr.index3 !== ''){
    if(playerr.index3  === playerr.index3 && playerr.index5  === playerr.index3 && playerr.index7 === playerr.index3){
      setWinText(playerr.index3, 'Wins')
    }
    if(playerr.index3  === playerr.index3 && playerr.index6  === playerr.index3 && playerr.index9  === playerr.index3){
      setWinText(playerr.index3, 'Wins')
      console.log('ara')
    }

  } if(playerr.index7 !== ''){
    if(playerr.index7  === playerr.index7 && playerr.index8  === playerr.index7 && playerr.index9  === playerr.index7){
      setWinText(playerr.index7, 'Wins')
      console.log('aasara')
    }
  }
  }
  const UpdateState = (name) => {
    handleClick();
    if(name==='index1'){
      setPlayer( prevState => ({...prevState, index1:letter}));
    }
    if(name==='index2'){
      setPlayer( prevState => ({...prevState, index2:letter}));
    }
    if(name==='index3'){
      setPlayer( prevState => ({...prevState, index3:letter}));
    }
    if(name==='index4'){
      setPlayer( prevState => ({...prevState, index4:letter}));
    }
    if(name==='index5'){
      setPlayer( prevState => ({...prevState, index5:letter}));
    }
    if(name==='index6'){
      setPlayer( prevState => ({...prevState, index6:letter}));
    }
    if(name==='index7'){
      setPlayer( prevState => ({...prevState, index7:letter}));
    }
    if(name==='index8'){
      setPlayer( prevState => ({...prevState, index8:letter}));
    }
    if(name==='index9'){
      setPlayer( prevState => ({...prevState, index9:letter}));
    }
  }
  return (
    <>
    <button >Start GAme</button>
    <h1>{wintext} </h1>
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
       <button >Restart game</button>
       <p></p>
    </>
  )
}

export default App;
