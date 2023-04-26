import React, { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ChildComponent from './ChildComp';
import ParentComponent from './ParentComp';


const Practice = () => {

  let myLoop = ['rinku', 'renu', 'swayam', 'bravo'];
  const [value, setValue] = useState('');


  // Old way
  // for(let i=0; i <= myLoop.length; i++){
  //     console.log(myLoop[i])
  // }

  // ES6 way
  // for (let elements of myLoop){
  //     console.log(elements)
  // }

  // forEach way
  myLoop.forEach(function (renu, index, array) {
    console.log(renu)
  });

  // Active Class
  const [active, setActive] = useState(0);
  const listItem = useRef();
  console.log(listItem.current)

useEffect(()=>{
  let listEle = document.querySelectorAll('.notActive');

  for(let i=0; i < listEle.length; i++){
    listEle[i].addEventListener('click', function(){
      let currentEle = document.querySelectorAll('.active');
      if(currentEle.length > 0){
        currentEle[0].className = currentEle[0].className.replace(' active', '');
      }
      this.className += ' active';
    })
  }
});

let a = "renu"
let b = "rinku"
const c = 'John';
const d = 30;
  return (
    <>
      {/* Array Example */}
      <div className='border p-5 mb-5'>
        <h1 className='text-3xl'>Array</h1>
        <div>{`${[...myLoop]}`}</div>
        
      </div>
      <ChildComponent Txt1={a} Txt2={b}/>
      {/* <ChildComponent/> */}
      {/* Active Class */}
      <div className='border p-5 mb-5'>
        <h1 className='text-3xl'>Active Class</h1>

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a href="#" className={`block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 notActive`} aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`}>About</a>
                </li>
                <li>
                  <a href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`}> Services</a>
                </li>
                <li>
                  <a href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`}>Pricing</a>
                </li>
                <li>
                  <a href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>

      {/* Rich Text Editor */}
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      
      {/* <ParentComponent/> */}
      <ChildComponent Txt1={c} Txt2={d} />
    </>


  )
}

export default Practice