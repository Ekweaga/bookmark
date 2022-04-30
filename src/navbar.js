import React from 'react'
import './navbar.css';
import logobokmak from './logo-bookmark.svg'

function Navbar() {
  return (
    <div className='menu'>
        <img src={logobokmak}/>
        <ul>
            <li>
                FEATURES
            </li>
            <li>
                CONTACT
            </li>
            <li>
                <button>LOGIN</button>
            </li>
        </ul>
        </div>
  )
}

export default Navbar