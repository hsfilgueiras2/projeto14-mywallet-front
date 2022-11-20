import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from "react-router-dom";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { UserInfoContext } from './assets/contexts/UserInfoContext';


export default function HomeScreen(){
    const {userInfo} = useContext(UserInfoContext);
    console.log(userInfo)
    const name = userInfo.name;
    console.log(name)
    const [info, setInfo] = useState([])
    const config = {headers: {name:name}}
    useEffect(() => {
        const plans = axios.get("http://localhost:5000/info",config)
        plans.then(promessa => {console.log(promessa);setInfo(promessa.data)})
    }, []);
    console.log(info)
    return(
        <StyledHome>
            <nav>
            <h1>Ola, {name}</h1>
            <Link to={"/"}>
            <ion-icon name="exit-outline"></ion-icon>
            </Link>
            </nav>
            <main></main>
            <footer>
                <Link to={"/deposit"}>
                <div>
                <ion-icon name="add-circle-outline"></ion-icon>
                <p>Nova<br/>entrada</p>
                </div>
                </Link>
                <Link to={"/withdraw"}>
                <div>
                <ion-icon name="remove-circle-outline"></ion-icon>
                <p>Nova<br/>saida</p>
                </div>
                </Link>
            </footer>
            
        </StyledHome>
    )
}

const StyledHome = styled.div`
a{text-decoration:none;}
box-sizing:border-box;
padding-left:10%;
padding-right:10%;
display:flex;
flex-direction:column;
align-items:center;
height: 100vh;
background: #8C11BE;
nav{
    align-items:center;
    box-sizing:border-box;
    width: 326px;
    height:78px;
    margin-bottom:0px;
    display:flex;
    justify-content:space-between;
}
nav h1{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 26px;
line-height: 31px;
color: #FFFFFF;
}
nav ion-icon{
    font-size:24px;
    color: #FFFFFF;
}
main{
    margin:0px;
    width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
}
footer{
    margin-top:13px;
    width: 326px;
    display:flex;
    justify-content:space-between;
}
footer div{
    box-sizing:border-box;
    padding-left:10px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    width: 155px;
height: 114px;
background: #A328D6;
border-radius: 5px;
}
footer div p{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: #FFFFFF;
}
footer div ion-icon{
    font-size:28px;
    color: #FFFFFF;
}
`
