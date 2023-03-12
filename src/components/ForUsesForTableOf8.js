import React from 'react'

const ForUsesForTableOf8 = () => {

    for(let num = 1; num <= 10; num++){
        let tableOf = 8; 
        console.log(tableOf + " * " + num + " = " + tableOf * num)
    }

    for(let num = 1; num <= 30; num++){
        let tableOf = 19; 
        console.log(tableOf + " * " + num + " = " + tableOf * num)
    }

    
  return (
     <div>
    <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>For Uses For Table Of8</div>
    <div className='container grid grid-cols-5'>
      <div className='col-span-4 p-4'>
        <div>We will get table of 8 and 9 in the console.</div>
      </div>

    </div>
  </div>
  )
}

export default ForUsesForTableOf8