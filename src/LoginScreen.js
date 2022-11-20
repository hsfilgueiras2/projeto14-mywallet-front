import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserInfoContext } from './assets/contexts/UserInfoContext';

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate =useNavigate();

    function sendRequest(event){
        event.preventDefault();
        const request = axios.post("",
        {
            email: email,
            password:password
        })
        request.then(promessa=>{console.log("PROMESSA");console.log(promessa);handleResponse(promessa)})
        request.catch((error)=>{console.log("ERRO");alert(error.response.data.message);})
    }

    function handleResponse(response){
        navigate('/home');
    }

    return (
        <LoginStyled >
            <h1>MyWallet</h1>
            <input placeholder='E-mail' required value={email} onChange={(e)=>setEmail(e.target.value)} >
            </input>
            <input placeholder='Senha' type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} >
            </input>
            <button type='submit' onClick={(e)=>{sendRequest(e)}} >Entrar</button>

            <Link to={`/sign-up`}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>

        </LoginStyled>
    )
}
const LoginStyled = styled.form`
height: 100vh;
background: #8C11BE;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


h1{
    font-family: 'Saira Stencil One';
font-style: normal;
font-weight: 400;
font-size: 32px;
line-height: 50px;
color: #FFFFFF;
margin-bottom:24px;
}

input{
    padding-left:15px;
    box-sizing:border-box;
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
border-width:0px;
margin-bottom:13px;
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
margin-bottom:36px;
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