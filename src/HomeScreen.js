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
    const name = userInfo.name;
    const [info, setInfo] = useState([])
    const config = {headers: {name:name}}
    const [totalBal,setTotalBal] = useState(0);
    useEffect(() => {
        const request = axios.get("http://localhost:5000/info",config)
        request.then(promessa => {console.log(promessa);
            promessa.data.forEach(element => {
                console.log(element.value)
            });
            const tempArr=promessa.data.filter(obj => {return obj.created == undefined});
            let tempBal = 0;
            tempArr.map(obj=>tempBal += parseFloat(obj.value));
            setTotalBal(tempBal);
            setInfo(tempArr);
           
        })
    }, []);


    return(
        <StyledHome>
            <nav>
            <h1>Ola, {name}</h1>
            <Link to={"/"}>
            <ion-icon name="exit-outline"></ion-icon>
            </Link>
            </nav>
            <main>
                <ul>
                    {
                        info.map((item,index)=>(
                            <li key={index}>
                                <p>{item.date}</p>
                                <span>
                                <p>{item.description}</p>
                                <StyledValue value={item.value}>{Math.abs(item.value).toFixed(2)}</StyledValue>
                                </span>
                            </li>
                        ))
                    }
                </ul>
                <span><h3>SALDO</h3><StyledBal value={totalBal}> {Math.abs(totalBal).toFixed(2)}</StyledBal></span>
            </main>
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
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-between;
box-sizing:border-box;
padding-bottom:10px;
}
main > span{
    width:300px;
    display:flex;
    justify-content:space-between;

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
ul{
    display:flex;
    flex-direction:column;
    align-items:center;
}
ul li {
    margin-top:23px;
    display:flex;
}
ul li > p{
    width:48px;
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C6C6C6;
}

ul li span{
    width:255px;
    display:flex;
    justify-content:space-between;
}
ul li span > :first-child{
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;
}
h3{
    font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
color: #000000;
}
footer div ion-icon{
    font-size:28px;
    color: #FFFFFF;
}
`
const StyledBal = styled.p`
color:${ (props)=> props.value < 0 ? '#C70000' : '#03AC00' };
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
`
const StyledValue = styled.p`
    font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color:${ (props)=> props.value < 0 ? '#C70000' : '#03AC00' };
`
