import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Active from './Active'

const Homepage = () => {
  return (
    <div>
        <h2 className='text-xl'>List of the components</h2>
        <ul className=''>
            <li>1. <Link to="/active">Active Link</Link></li>
            <li>2. <Link to="/dynamicaddlisting">Dynamic Add Listing</Link></li>
            <li>3. <Link to="/multiselect">Multi-Select Dropdown</Link></li>
            <li>4. <Link to="/richtexteditor">Rich Text Editor</Link></li>
        </ul>
    </div>
  )
}

export default Homepage