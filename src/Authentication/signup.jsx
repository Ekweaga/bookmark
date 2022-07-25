import React,{useState} from 'react'
import { BoxFormContainer , FormContainer,Input,Button,BoldLink,MutedLink} from '../common'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth,db} from '../firebase';

function Signup({expand}) {
  const [name, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error,seterror] = useState('')
  const [success, setsuccess] = useState('')

  const handlesubmit = async (e)=>{
      e.preventDefault();
      if(name === "" || email ==="" || password ===""){
          seterror("Fields are empty")
      }
      
        try{
          const result = await createUserWithEmailAndPassword(auth,email,password)
          console.log(result.user.accessToken);
          localStorage.setItem('user',JSON.stringify(result.user))
          localStorage.setItem('token',JSON.stringify(result.user.accessToken))

          
          setsuccess("Account created")
          setTimeout(()=>{
              expand();
          },1000)
        
      }
         
          
      
     
      catch(err){
        
            seterror(err.message)
      }

         
     
  }
  return (
    <BoxFormContainer>
    <FormContainer onSubmit={handlesubmit}>
        <Input type="text" placeholder="Name" value={name} onChange={(e)=>setusername(e.target.value)}/><br/>
        <Input type="email" placeholder="Email" value={email} onChange={(e)=>setemail(e.target.value)}/><br/>
        <Input type="password" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/><br/>
        <span style={{width:'100%',fontSize:'14px'}}>Already have an account ? <span style={{color:'rgb(9, 9, 90)'}} onClick={expand}>Sign in</span></span><br/>
        <Button type="submit">Sign Up</Button>
        <div style={{width:'100%', textAlign:'center',color:'crimson',padding:'5px'}}>{error}{success}</div>
    </FormContainer>
   </BoxFormContainer>
  )
}

export default Signup