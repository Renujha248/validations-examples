import React from 'react'
import SideBar from './SideBar'

const CheckBoxInput = () => {
  const checkBox = [
    {
      id: 1,
      name: "Renu",
      class: 5
    },
    {
      id: 2,
      name: "Rinku",
      class: 6
    },
    {
      id: 3,
      name: "Swayam",
      class: 7
    },
  ];


  return (
    <div>
      <div className='font-bold text-3xl p-4 border border-y-8 text-center text-gray-500'>Check Box</div>
      <div className='container grid grid-cols-5 bg-gray-300'>
        <div className=''>
        </div>
        <div className='col-span-4'>
          <div> Check Box code will come here...</div>


          {checkBox.map((dataValue, index) =>
            <div className='h8 bg-orange-500 mb-4 p-4 flex'>
              <div className='mr-4'>This is row {dataValue.id}</div>
              <input className='p-2 py-0' type="text" placeholder={`${dataValue.name}`} />
              <div>Class no. is {dataValue.class}</div>
            </div>
          )}


        </div>
      </div>
    </div>)
}

export default CheckBoxInput