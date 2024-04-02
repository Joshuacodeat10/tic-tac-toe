import { useState } from 'react'


function App() {
  
  let [playerr, setPlayer] = useState()
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
    if (toggleplayer){
      setPlayer(array[0])
      console.log(toggleplayer)
    }
    if (!toggleplayer){
      setPlayer(array[1])
      console.log(toggleplayer)
   }
    console.log(toggleplayer)
  }
  // const changeIndex = () => {
  
  //     setPlayer(oppositeCharacter)
  // }
  // const playgame = () =>{

  // }
  const [index5, setindex5] = useState('')
  const [index6, setindex6] = useState('')
  const [index7, setindex7] = useState('')
  const [index8, setindex8] = useState('')
  const [index9, setindex9] = useState('')
  return (
    <>
    <button onClick={handleClick}>Start GAme</button>

      <div className="grid">
        <div onClick={()=>{ handleClick(), setindex1(playerr)}} className="item corners"><p>{index1}</p></div>
        <div onClick={()=>{ handleClick(), setindex2(playerr)}}className="item">{index2}</div>
        <div onClick={()=>{ handleClick(), setindex3(playerr)}}className="item">{index3}</div>
        <div onClick={()=>{ handleClick(), setindex4(playerr)}}className="item corners">{index4}</div>
        <div onClick={()=>{ handleClick(), setindex5(playerr)}}className="item">{index5}</div>
        <div onClick={()=>{ handleClick(), setindex6(playerr)}}className="item">{index6}</div>
        <div onClick={()=>{ handleClick(), setindex7(playerr)}}className="item corners bottom">{index7}</div>
        <div onClick={()=>{ handleClick(), setindex8(playerr)}}className="item bottom" >{index8}</div>
        <div onClick={()=>{ handleClick(), setindex9(playerr)}}className="item bottom">{index9}</div>
       </div>
       
    </>
  )
}

export default App
