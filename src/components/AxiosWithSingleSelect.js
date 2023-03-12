import React from 'react'

const AxiosWithSingleSelect = () => {

  // useState(() => {
  //   $(".txtFormat").each(function () {
  //     $(this).find("li:contains(Transition pay)").css('display', 'none');
  //     $(this).find("li:contains(Monthly retention)").css('display', 'none');
  //     $(this).find("li:contains(Pay increases)").css('display', 'none');

  //     $(this).find("li:contains(Transition Pay)").css('display', 'none');
  //     $(this).find("li:contains(Monthly Retention)").css('display', 'none');
  //     $(this).find("li:contains(Pay Increases)").css('display', 'none');
  //   });
  // })

  return (
    <div>
      <div className='font-bold text-3xl py-4 border text-center text-gray-500'>Axios Uses</div>
      <div className='container grid grid-cols-5 bg-gray-300'>
        <div className='col-span-4 m-8'>
          <div className='grid grid-cols-4'>
            <select>
              <option>1</option>
              <option>25</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </div>
      </div>
    </div>)
}

export default AxiosWithSingleSelect