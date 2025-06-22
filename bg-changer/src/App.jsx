import { useState } from 'react'

function App() {
  const [bgColor, setBgColor] = useState('red');
  const colorClassMap = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    orange: "bg-orange-500",
    purple: "bg-purple-500",
    pink: "bg-pink-500",
    teal: "bg-teal-500",
    indigo: "bg-indigo-500",
    gray: "bg-gray-500",
    black: "bg-black",
    white: "bg-white",
    cyan: "bg-cyan-500",
    lime: "bg-lime-500",
    violet: "bg-violet-500",
  };

  const colors = [
    "Red", "Blue", "Green", "Yellow", "Orange",
    "Purple", "Pink", "Teal", "Indigo", "Gray",
    "Black", "White", "Cyan", "Lime", "Violet"
  ];
  const changeColor = (color) => {
    setBgColor(color.toLowerCase())
  }
  return (
    <>
      <div id='setColor' style={{ backgroundColor: bgColor.toLowerCase() }} className={`flex h-screen justify-center items-end`}>
        <div className="border rounded-xl bottom-7 fixed p-3 max-w-[90%] w-full h-18 flex overflow-x-auto whitespace-nowrap items-center justify-center space-x-2 align-center bg-white">
          {/* <button type="button" onClick={(e) => changeColor(e.target.innerText)} className='h-8 border rounded bg-red-300 px-4 mr-2'>Red</button> */}
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={(e) => changeColor(e.target.innerText)}
              className={`h-8 border shadow-amber-50 rounded ${colorClassMap[color.toLowerCase()] || 'bg-white'} text-white px-4 mb-2`}>
              {color}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
