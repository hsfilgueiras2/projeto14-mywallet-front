import { useState} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GlobalStyle from "./assets/styles/GlobalStyle";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import { UserInfoContext} from "./assets/contexts/UserInfoContext";

export default function App(){
    const [userInfo,setUserInfo] = useState({})

    return(
        <>
        <UserInfoContext.Provider value={{userInfo, setUserInfo}}>
        <BrowserRouter>
        <GlobalStyle/>
        <Routes>
        <Route path="/" element={<LoginScreen/>}></Route>
        <Route path="/home" element={<HomeScreen/>}></Route>
        </Routes>
        </BrowserRouter>
        </UserInfoContext.Provider>
        </>
    )
}