import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SignUpScreen(){
    const navigate =useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    function sendRegistration(e){

        e.preventDefault();
        if(password == confirmPassword){
            const registration = axios.post("https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up",
            {
                name:name,
                email:email,
                password:password
            })
            registration.then(promessa=>{
                navigate(`/`)    
            })
            registration.catch(error=>{
                alert(error.response.data.message);
            })
        }
        else{
            alert("As senhas nao sao iguais")
        }
        
    }

    return(
        <RegisterStyled>
            <h1>MyWallet</h1>
            <input placeholder='Nome' required value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
            <input placeholder='E-mail' required value={email} onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input placeholder='Senha' type="password" required value={password} onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <input placeholder='Confirme a senha' required value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}>
            </input>
            <button type='submit' onClick={(e)=>{sendRegistration(e)}}>Cadastrar</button>
            <Link to={"/"}>
            <p>Já tem uma conta? Entre agora</p>
            </Link>
        </RegisterStyled>
    )
}

const RegisterStyled = styled.form`
height:100vh;
background: #8C11BE;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
margin-bottom:28px;
}
input{
    border-width:0px;
    width: 326px;
height: 58px;
background: #FFFFFF;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
color: #000000;
margin-bottom:13px;
padding-left:15px;
box-sizing:border-box;
}
button{
    width: 326px;
height: 46px;
background: #A328D6;
border-radius: 5px;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
border-width:0px;
margin-bottom:32px;
}
p{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 18px;
color: #FFFFFF;
}
`