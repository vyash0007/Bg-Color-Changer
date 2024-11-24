import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="  w-full h-screen duration-200"
      style={{backgroundColor:color}}
      >
        <div className="fixed flex flex-wrap 
        justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center
            gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
            <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "red"}}
            >Red</button>

            <button 
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "green"}}
            >Green</button>

            <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "blue"}}
            >Blue</button>

            <button
            onClick={() => setColor("orange")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "orange"}}
            >Orange</button>

            <button
            onClick={() => setColor("pink")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "pink"}}
            >Pink</button>

            <button
            onClick={() => setColor("magenta")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "magenta"}}
            >Magenta</button>

            <button
            onClick={() => setColor("Yellow")}
             className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{backgroundColor: "Yellow"}}
            >Yellow</button>

            <button
            onClick={() => setColor("Grey")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Grey"}}
            >Grey</button>
            
            <button
            onClick={() => setColor("Cyan")}
             className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor: "Cyan"}}
            >Cyan</button>
            
            
            
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
