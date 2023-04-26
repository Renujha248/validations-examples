import React, { useEffect, useRef, useState } from 'react';

const activeStyle = {
    background: 'hotpink',
    color: 'white'
};
const button = document.querySelectorAll('.active')
const Active = (el = button) => {
    const [activeId, setActiveId] = useState(0);
    const Menubar = useRef();

    useEffect(() => {
        // let listEle = document.querySelectorAll('.notActive');
        // for (let i = 0; i < listEle.length; i++) {
        //     listEle[i].addEventListener('click', function () {
        //         let currentEle = document.querySelectorAll('.active');
        //         if (currentEle.length > 0) {
        //             currentEle[0].className = currentEle[0].className.replace(' active', '');
        //         }
        //         this.className += ' active';
        //     })
        // }
    });
    function buttonClickHandler(e) {
        // console.log(kindaCodeRef.currentEle);
        var allElements = document.querySelectorAll(".para");
        allElements.forEach((element) => {
            element.classList.remove('active');
            e.target.className = "para active";
        });
    }

    function crntCls(e) {
        let ElementList = document.querySelectorAll(".notActive");
        ElementList.forEach((eleList) => {
            eleList.classList.remove('active');
            e.target.classList.add('active')
        })
    }


    return (
        <div>
            <p
                // ref={kindaCodeRef}
                className={`para`}
                style={setActiveId === activeId ? activeStyle : {}}
                onClick={buttonClickHandler}
            >
                Activate me, please
            </p>
            <p
                // ref={kindaCodeRef}
                className={`para`}
                style={setActiveId === activeId ? activeStyle : {}}
                onClick={buttonClickHandler}
            >
                Activate me, please 2
            </p>
            <p
                // ref={kindaCodeRef}
                className={`para`}
                style={setActiveId === activeId ? activeStyle : {}}
                onClick={buttonClickHandler}
            >
                Activate me, please 3
            </p>

            <div className='border p-5 mb-5'>
                <h1 className='text-3xl'>Active Class</h1>

                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li ref={Menubar}>
                                    <a href="#" className={`block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 notActive`} onClick={crntCls} aria-current="page">Home</a>
                                </li>
                                <li ref={Menubar}>
                                    <a href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`} onClick={crntCls}>About</a>
                                </li>
                                <li>
                                    <a ref={Menubar} href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`} onClick={crntCls}> Services</a>
                                </li>
                                <li>
                                    <a ref={Menubar} href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`} onClick={crntCls}>Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className={`block py-2 pl-3 pr-4 text-gray-900 rounded md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent notActive`} onClick={crntCls}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            {/* Toggle class */}
            <div className='toggleExample'>
            <p
                // ref={kindaCodeRef}
                className={`exmp3`}
                style={setActiveId === activeId ? activeStyle : {}}
                onClick={buttonClickHandler}
            >
                Activate me, please
            </p>
            <p
                // ref={kindaCodeRef}
                className={`exmp3`}
                style={setActiveId === activeId ? activeStyle : {}}
                onClick={buttonClickHandler}
            >
                Activate me, please 2
            </p>
            <p
                // ref={kindaCodeRef}
                className={`exmp3`}
                style={setActiveId === activeId ? activeStyle : {}}
                onClick={buttonClickHandler}
            >
                Activate me, please 3
            </p>
            </div>

        </div>
    );
}
export default Active;