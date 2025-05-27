// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import { useState } from "react";



export default function App() {

  const [clicks, setClicks] = useState<number>(0);
  // const [votes, setVotes] = useState(0)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("I'm a button!", event);
    setClicks(clicks + 1);
    console.log(clicks);
  };

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
      </div>
      <button onClick={handleClick}>Good</button>
      <button onClick={handleClick}>Neutral</button>
      <button onClick={handleClick}>Bad</button>
    </>
  )
  // const [count, setCount] = useState(0)

  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.tsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
}

