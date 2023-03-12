import React from 'react'
import SideBar from './SideBar'

function TextArea() {
  // let myData = [
  //   {
  //     id: 1,
  //     name: "Renu",
  //     Country: "India"
  //   },
  //   {
  //     id: 2,
  //     name: "Bibhuti",
  //     Country: "Indiana"
  //   },
  //   {
  //     id: 3,
  //     name: "Swayam",
  //     Country: "America"
  //   },
  // ]
  return (
    <div>
      <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>Text Area</div>
      <div className='container grid grid-cols-5'>
        <div className='col-span-4'>
          <div> TextArea code will come here...</div>
        </div>

      </div>
    </div>
  )
}

export { TextArea }