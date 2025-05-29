
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import { useState } from "react";



export default function App() {

  const [clicks, setClicks] = useState<number>(0);
  const [visible, setVisible] = useState(false);
  // const [votes, setVotes] = useState(0)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("I'm a button!", event);
    setClicks(clicks + 1);
    console.log(clicks);
    setVisible(true);
  };

  
  const handleClose = ( ) => {
    setVisible(false); 
  }
  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
      <button onClick={handleClick}>Good {clicks}</button>
      <button onClick={handleClick}>Neutral {clicks}</button>
      <button onClick={handleClick}>Bad {clicks}</button>

      
      {visible && <button onClick={handleClose}>Reset</button>}
    </>
  )
  
}

