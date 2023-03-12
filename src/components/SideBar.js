import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function SideBar() {
    useEffect(() => {
        let menuListCount = document.getElementsByClassName('menu');
        for (let i = 0; i < menuListCount.length; i++) {
            menuListCount[i].addEventListener('click', function () {
                let currentMenu = document.getElementsByClassName('active');
                if (currentMenu.length > 0) {
                    currentMenu[0].classList = currentMenu[0].classList.replace(' active', '');
                }
                this.classList += " active"
            });

        }
    })
    return (
        <scroll>
            <div className="grid grid-cols-1 h-full justify-between bg-gray-800 text-gray-300">
                <div className="p-4">
                <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-job-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/practice">Practice</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-job-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/dashbord">Dashboard</Link>
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="mb-4">
                        {/* <div className="flex w-full items-center justify-between">
                        <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-job-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                            </svg>
                            <span className="ml-3 font-bold">
                                <Link to="/header">Header</Link>
                            </span>
                        </a>
                    </div> */}
                    </div>

                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-job-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/dynamicaddlisting">DynamicAddListing</Link>
                                </span>
                            </a>
                        </div>
                    </div> <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-job-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/tableof8">For Uses For Table Of 8</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-job-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/inputbox">Input Box</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/textarea">Text Area</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/submitbutton">Submit Button</Link>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/checkboxinput">Check Box Input</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/radioinput">Radio Input</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/singleselect">Single Select</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/axiosWithSingleSelect">Axios Uses</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/multiselect">Multi Select</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/formvalidation">Form Validation</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="flex w-full items-center justify-between">
                            <a className="menu flex w-full cursor-pointer items-center rounded-lg px-4 py-2 transition duration-300 ease-in-out hover:bg-black hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                </svg>
                                <span className="ml-3 font-bold">
                                    <Link to="/reacttabledatafetch">React Table Data Fetch</Link>

                                </span>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </scroll>
    )
}

export default SideBar