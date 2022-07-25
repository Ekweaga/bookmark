import React, { useEffect,useState } from 'react';
import './bookmark.css';
import logobokmak from './logo-bookmark.svg'

function Bookmark() {
    const [oldcard, setoldcard] = useState([{linkhref:"",linkname:""}]);
    const [newdata,setnewdata] = useState({linkhref:'',linkname:''});
    const[error,seterror] = useState("");
    const [itemstored,setitemstored] = useState('')

    const add = (payload)=>{
        const oldarray = oldcard
        const newarray = [...oldcard, payload];
       
        if(!newdata.linkhref  || !newdata.linkname ){
            seterror("Check input fields")
        }
        else{
            
            setnewdata({linkhref:'' , linkname:''});
            seterror("");
            localStorage.setItem("ref",JSON.stringify(newarray));
            const getitem = JSON.parse(localStorage.getItem('ref'))

            setoldcard(getitem)
            console.log(getitem)

        }
       
      

    }

useEffect(()=>{
    const getitems = JSON.parse(localStorage.getItem('ref'));
    if(getitems){
        setoldcard(getitems)
    }
 

},[])
    
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
                <button onClick={()=>add(newdata)}>Add Url</button>
            </div>
            </form>
            <div>
                <p style={{color:'red'}}>{error ? error : null}</p>
            </div>
        </div>
        <div style={{display:'flex',flexDirection:'column'}}>
{oldcard.length > 1 ?(<div className="links" >
                <h1 style={{display:'flex',flexDirection:'column'}}>{oldcard.map((card,index)=>{
                   return <span key={index}>{card.linkhref?<img src={logobokmak}/>:null}<a href={card.linkhref}>{card.linkhref ? card.linkname :null}</a></span>
                })}</h1>
            </div>) : <div>No directory added</div>}
        </div>

    </div>
    
    </>
  )
}

export default Bookmark