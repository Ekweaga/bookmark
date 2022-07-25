import React,{useState} from 'react'
import './home.css'
import illf from './illustration-features-tab-1.svg';
import illf2 from './illustration-features-tab-2.svg';
import illf3 from './illustration-features-tab-3.svg';
import hero from './illustration-hero.svg';
import logobokmak from './logo-bookmark.svg'
import facebook from './icon-facebook.svg';
import twitter from './icon-twitter.svg';
import chrome from './logo-chrome.svg'
import firefox from './logo-firefox.svg'
import opera from './logo-opera.svg'
import {Link} from 'react-router-dom'
import Navbar from './navbar';

function Home() {
  const [de, setde] = useState(true)
  const [dee, setdee] = useState(false)
  const [deee, setdeee] = useState(false)
  const deopen = ()=>{
    setde(true);
    setdee(false)
    setdeee(false)
  }
  const deeopen = ()=>{
    setdee(true)
    setde(false)
    setdeee(false)
  }
  const deeeopen = ()=>{
    setde(false)
    setdee(false)
    setdeee(true)
  }
  return (
    <>
   
      <Navbar/>
  
    
    
    <div>
     
      <div className='header'>
        <div className='h1'>
          <h1>  A Simple Bookmark Manager</h1>
          <p>A clean and simple interface to organize your favourite websites. Open a new browser tab
            and see your site load instantly
          </p>
          <div>
          <Link to="/bookmark"><button>ADD URL</button></Link> 
          </div>
        </div>
        <div className='h2'>
          <img src={hero} />
        </div>
      </div>
    </div><br/>
    
    <div className='features'>
      <div>
      <h1>Features</h1>
      <p>
        Our aim is to make it quick and easy for you to access your favourite websites.
        Your Bookmark sync on your devices so you can access them on go.
      </p>
      </div>
      
      </div>
      <div>
        <div className='links'>
          <ul>
            <li onClick={deopen} className={de ? 'color' : 'black'}>
              Simple Bookmarking
            </li>
            <li onClick={deeopen} className={dee ? 'color' : 'black'}>
           Speedy Searching
            </li>
            <li onClick={deeeopen} className={deee ? 'color' : 'black'}>
             Easy Sharing
            </li>
          </ul>
          <div className='ftlinks'>
          { de && <div className='f1'>
             
             <div className="imgs"> <img src={illf}/></div>
              <div><h1>Bookmark in one click</h1>
              <p>Orgainze your bookmarks however you want. Our simple drag and drop inteface gives you complete control
                over how you manage your favourite sites.
              </p>
              </div>
            
            
            </div>}
          {dee && <div className='f1'>
             
             <img src={illf2}/>
             <div><h1>Intelligent Search</h1>
             <p>Our powerfulsearch features will help you find saved sites in no time at all. No need to trawl through
               all your bookmarks at all
             </p>
             <div>
               <button>More info</button>
             </div>
             </div>
           
           
           </div>}
          {deee && <div className='f1'>
             
             <img src={illf3}/>
             <div><h1>Share your bookmarks</h1>
             <p>Easily share your bookmarks and collections with others. Create a shareable link that you can send at a button click
             </p>
             </div>
           
           
           </div>}

          </div>
          
        </div>
      </div>
     <div className="ext">
      <div>
        <h1>Download the extension</h1>
        <p>We got more browser in the pipeline. Please do let us know if you got a favourite you'd like us to patronize</p>
        <div className="exts">
          <div className="ext1">
              <div>
                <img src={chrome}/>
              </div>
              <div>
                <h2>Add to Chrome</h2>
                <p>Maximumm version 6.2</p>
              </div>
              <div>
                <button>Add & Install extension</button>
              </div>
          </div>
          <div className="ext2">
          <div>
                <img src={firefox}/>
              </div>
              <div>
                <h2>Add to Firefox</h2>
                <p>Maximumm version 5.5</p>
              </div>
              <div>
                <button>Add & Install extension</button>
              </div>
          </div>
          <div className="ext3">
          <div>
                <img src={opera}/>
              </div>
              <div>
                <h2>Add to Opera</h2>
                <p>Maximumm version 4.5</p>
              </div>
              <div>
                <button>Add & Install extension</button>
              </div>
          </div>
        </div>
      </div>
     </div>
      <div className='ask'>
        <div>
          <h1>Frequently Asked Questions</h1>
          <p>Here are some of our FAQs. If you have any other questions you'd like answers please feel free to email us</p>
        </div>
        <div>
          <ul>
            <li>What is BookMark ?</li>
            <li>Is there a mobile app ?</li>
            <li>What is BookMark ?</li>
            <li>What is a Bookmarking website ?</li>
           
          </ul>
        </div>
      </div>

      <div className='email'>
        <div><h1>Stay up-to-date with what we are doing</h1></div>
        <div className="input">
          <input type='email' placeholder='Enter email'/> <button>Contact Us</button>
        </div>

      </div>

      <div className='footer'>
        <div className='ft1'>
        <img src={logobokmak}/>
        <ul>
          <li>HOME</li>
          <li>FEATURES</li>
          <li>CONTACT</li>
        </ul>
        </div>
        <div>
          <img src={facebook}/>&nbsp; &nbsp;
          <img src={twitter}/>
        </div>
       
      </div>
      
      </>
  )
}

export default Home