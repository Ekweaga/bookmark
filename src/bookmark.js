import React, { useEffect,useState } from 'react';
import './bookmark.css';
import logobokmak from './logo-bookmark.svg'

function Bookmark() {
    const [oldcard, setoldcard] = useState([{linkhref:"",linkname:""}]);
    const [newdata,setnewdata] = useState({linkhref:'',linkname:''});
    const[error,seterror] = useState("");

    const add = (payload)=>{
        const oldarray = oldcard
        const newarray = [...oldcard, payload];
       
        if(!newdata.linkhref  || !newdata.linkname ){
            seterror("Check input fields")
        }
        else{
            setoldcard(newarray)
            setnewdata({linkhref:'' , linkname:''});
            seterror("");
        }
       
      

    }


    
  return (
   <> 
   <div className='bookhead'>
      <a href="/">  <img src={logobokmak}/></a>
        <div>
            Email
        </div>
            

    </div>
    <div className='body'>
        <div>
            <form onSubmit={e=>e.preventDefault()}>
            <div><input type="text" placeholder='Link name' onChange={e=>setnewdata({...newdata, linkname:e.target.value})} value={newdata.linkname}/></div>
            <div><input type="text" placeholder='https://www.goal.com' onChange={e=>setnewdata({...newdata, linkhref:e.target.value})} value={newdata.linkhref}/></div>
            <div>
                <p style={{color:'red'}}>{error ? error : null}</p>
            </div>
            <div>
                <button onClick={()=>add(newdata)}>Add Url</button>
            </div>
            </form>
          
        </div>
        <div>
            <div>
                <h1>{oldcard.map((card)=>{
                   return <span><a href={card.linkhref}>{card.linkhref ? card.linkname :null}</a></span>
                })}</h1>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Bookmark