import React from 'react'
import {useState} from 'react'
import styled from 'styled-components'
import { BoldLink, BoxFormContainer,Input} from '../common'
import {motion} from 'framer-motion'
import Login from './login'
import Signup from './signup'

function Index() {
  const [isexpanded,setisexpanded]=useState(false);
  const [formstate,setformstate] = useState(true)
  const expandconfig = {
    type:"spring",
    duration:1,
    stiffness:30
  }

  const formswitch = ()=>{
    switchexpand()
    setTimeout(()=>{
      setformstate(!formstate)
    },1000)
   
  }

  const switchexpand = ()=>{
    setisexpanded(true);
    

    setTimeout(()=>{
      setisexpanded(false)
    },expandconfig.duration * 1000)
  }

  const backdropvariants ={
    expanded:{
      width:"233%",
      height:"1050px",
      borderRadius:"20%",
      transform:"rotate(60deg)"
    },
    collapse:{
      width:"160%",
      height:"550px",
      transform:"rotate(60deg)"
    }
  }
  return (
    <Main>
    <BoxContainer>
     <TopContainer>
       <Backdrop variants={backdropvariants} animate={isexpanded ? "expanded":"collapse"} initial={false} transition={expandconfig}/>
           <HeaderContainer>
            { formstate ? (<><HeaderText>Welcome</HeaderText>
             <HeaderText>Back</HeaderText>
             <h5 style={{color:'white',fontSize:'11px',marginTop:'10px'}}>Please log in to continue </h5></>): (<><HeaderText>Create</HeaderText>
             <HeaderText>Account</HeaderText>
             <h5 style={{color:'white',fontSize:'11px',marginTop:'10px'}}>Please sign up to continue </h5></>)} 
   
           </HeaderContainer>
   
     </TopContainer>
     <InnerContainer>
       { formstate ?  <Login expand={formswitch}/>: <Signup expand={formswitch}/>}
    
     </InnerContainer>
    
    </BoxContainer>
    </Main>
  )
}

const InnerContainer = styled.div`
disp;llay:flex;
flex-direction:column;
width:100%;

`
const Main = styled.div`
width:100%;
height:100%;
display:flex;
align-items:center;
flex-direction:column;
margin-top:50px;
jiustify-content:center;`


const BoxContainer = styled.div`
width:280px;
min-height:550px;
display:flex;
flex-direction:column;
border-radius:19px;
background:white;
box-shadow:0 0 2px rgba(15,15,15,0.28);
position:relative;
overflow:hidden;
`
const TopContainer= styled.div`
width:100%;
height:250px;
display:flex;
align-items:center;
justify-content:flex-end;
padding:0 1.8em;
padding-bottom:5em;
flex-direction:column;


`

const Backdrop = styled(motion.div)`
position:absolute;
display:flex;
flex-direction:column;
border-radius:50%;
width:160%;
height:550px;
  background-color: rgb(9, 9, 90);
top:-290px;
left:-70px;
transform:rotate(80deg);

`

const HeaderContainer= styled.div`
width:100%;
display:flex;
flex-direction:column;
z-index:2222;

`
const HeaderText = styled.h2`
font-size:25px;
font-weight:600;
line-height:1.2;
color:white;
margin:0;`


export default Index