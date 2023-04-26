import React, { useState } from 'react'
import SideBar from './SideBar'

function NumberCount() {
  
  return (
    <div>
      <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>Number Counting </div>
      <div className='container grid grid-cols-5'>
        <div className='col-span-1 text -center'>
          <div> NumberCount code will come here...</div>
          <Counter />
        </div>
      </div>
    </div>
  );
};

function Counter(){

const [number, setNumber] = useState(0)

// const tt = () => {
//   setNumber()
// }
  return(
<div>
  <h3 className='text-2xl mt-4 font-bold bg-pink-500 text-center'>{number}</h3>
  <button className='bg-blue-300 rounded font-bold p-2 mt-4 item-center text-center' onClick={()=>setNumber(number+1)}>Increeze the Number</button>
  <button className='bg-blue-300 rounded font-bold p-2 mt-4 item-center text-center' onClick={()=>setNumber(number-1)}>Decrease the Number</button> 
</div>
  );
};


export { NumberCount }