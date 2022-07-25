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
            <li> <a href="/bookmark"><button style={{background:'white',border:'none', boxShadow: '8px 18px 25px rgba(255, 255, 255, 0.15)'}}>ADD A URL</button></a> </li>
            <li>
                <button style={{background:'crimson',color:'white'}}>LOGIN</button>
            </li>
        </ul>
        </div>
  )
}

export default Navbar