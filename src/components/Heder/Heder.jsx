import React from 'react'
import { Link } from 'react-router-dom'
import a1 from "../../assets/image/a1.png"
import "./Heder.scss"

function Heder() {
  return (
    <div>
        <div className='box'>
            <img src={a1} alt="" />
        </div>
        <div className="top container">
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Pages</Link>
            </li>
            <li>
              <Link to="/about">Shop</Link>
            </li>
            <li>
              <Link to="/about">Projects</Link>
            </li>
            <li>
              <Link to="/about">News</Link>
            </li>
           
          </ul>
        </div>

      
 
    </div>
  )
}

export default Heder
