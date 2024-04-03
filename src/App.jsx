import { useState } from 'react'
function App() {
  
  let [playerr, setPlayer] = useState(
  ['X','O','X'],
  ['X','O','X'],
  ['X','O','X']
    )
  const [toggleplayer, setTogglePlayer] = useState(true)
  
  return (
    <>
    <button >Start GAme</button>

      <div className="grid">
        <div className="item corners"><p>{playerr}</p></div>
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
    </>
  )
}

export default App;
