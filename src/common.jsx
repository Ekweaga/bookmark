import styled from 'styled-components'

export const BoxFormContainer=styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
margin-top:20px;
padding:0px 16px;
padding-bottom:20px;
`

export const FormContainer = styled.form`
width:100%;
display:flex;
flex-direction:column;

`

export const MutedLink= styled.a`
font-size:12px;
color:rgba(200,200,200,0.8);
font-weight:500;
text-decoration:none;

`

export const BoldLink = styled.a`
font-size:12px;
color:rgb(2,0,36);
font-weight:500;
text-decoration:none;


`

export const Input= styled.input`
outline:none;
height:35px;
width:100%;
border:none;

padding:0px 10px;
margin:10px 0px;
transition:all 0.5s ease-in-out;

&:focus{
    outline:none;
    border-bottom:1px solid blue;
   
}
`
export const Button = styled.button`
width:100%;
padding:11px 40%;
border-radius:20px;
font-size:13px;
cursor:pointer;
transition:all 0.5s ease-in-out;
background:rgb(9, 9, 90);
border:none;

color:white;

`