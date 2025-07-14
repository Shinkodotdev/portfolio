import React from 'react'
import { counterItems } from '../constants/index.js'

const AnimatedCounter = () => {
  return (
  
    <div id="counter" className="padding-x-lg xl:mt-20 mt-20 mb-20">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div key={item.label || index} className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center">
            <div className="counter-number text-white text-5xl font-bold mb-2">
              0{item.suffix}
            </div>
            <p className="text-white text-lg font-medium">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnimatedCounter
