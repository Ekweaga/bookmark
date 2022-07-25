import React,{useState} from 'react'
import { BoxFormContainer , FormContainer,Input,Button,BoldLink,MutedLink} from '../common'
import {auth,db} from '../firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useHistory} from 'react-router-dom'
function Login({expand}) {
  const history = useHistory();
  const [name, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error,seterror] = useState(null)

  const handlesubmit = async (e) =>{
    e.preventDefault();
    if(password === "" || email ==="" ){
        seterror("Fields are empty")
    }
    try{
      const result = await signInWithEmailAndPassword(auth,email,password)
      console.log(result.user);
    
    
      window.location.reload()
      
      }
      
   
      
          
     
      
  
 
  catch(err){
    seterror(err.message)

  }
 

   
           
}
  return (
    <BoxFormContainer>
    <FormContainer onSubmit={handlesubmit}>
   
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
        <span style={{width:'100%',fontSize:'14px'}} >Don't have an account ? <span onClick={expand} style={{color:'rgb(9, 9, 90);'}}>Sign up</span></span><br/>
        <Button type="submit" >Sign in</Button>
        <div style={{width:'100%', textAlign:'center',color:'crimson',padding:'5px'}}>{error}</div>
    </FormContainer>
   </BoxFormContainer>
  )
}

export default Login