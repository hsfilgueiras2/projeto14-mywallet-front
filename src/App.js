import { useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import { UserInfoContext} from "./assets/contexts/UserInfoContext";
import HomeScreen from "./HomeScreen";
import WithdrawScreen from "./WithdrawScreen"
import DepositScreen from "./DepositScreen"


export default function App(){
    const [userInfo,setUserInfo] = useState({})

    return(
        <>
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
        <BrowserRouter>
        <GlobalStyle/>
        <Routes>
        <Route path="/" element={<LoginScreen/>}></Route>
        <Route path="/sign-up" element={<SignUpScreen/>}></Route>
        <Route path="/home" element={<HomeScreen/>}></Route>
        <Route path="/withdraw" element={<WithdrawScreen/>}></Route>
        <Route path="/deposit" element={<DepositScreen/>}></Route>
        </Routes>
        </BrowserRouter>
        </UserInfoContext.Provider>
        </>
    )
}