import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from "react-router-dom";
import { useState,useEffect, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserInfoContext } from './assets/contexts/UserInfoContext';

export default function WithdrawScreen(){
    const {userInfo} = useContext(UserInfoContext)
    const name = userInfo.name;
    const[value, setValue] = useState();
    const[description, setDescription] = useState();
    const config = {headers : {name:name }}
    function sendRequest(e){
        e.preventDefault();
        axios.post("http://localhost:5000/withdraw",
        {
            value:value,
            description:description
        },config)
    }
    return(
        <StyledWithdraw>
            <nav><h1>Nova saida</h1></nav>
            <input placeholder='Valor' value={value} onChange={e=>setValue(e.target.value)}></input>
            <input placeholder='Descricao' value={description} onChange={e=>setDescription(e.target.value)}></input>
            <button type='submit' onClick={e => sendRequest(e)}>Salvar saida</button>
        </StyledWithdraw>
    )
}

const StyledWithdraw = styled.form`
height:100vh;
background: #8C11BE;
display:flex;
flex-direction:column;
align-items:center;
nav{
    height:78px;
    width: 326px;
    display:flex;
    align-items:center;
}
h1{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
}
input {
    box-sizing:border-box;
    padding-left:15px;
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
button {
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
}
`