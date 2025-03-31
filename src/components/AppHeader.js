import { useState } from "react";
import { LOGO_URL } from "../utils/constant";


const AppHeader = ()=>
{
    const [loginName , setloginName] = useState("LogIn")
    
    return(
    <div className="header-container">
    <div className="logo">
        <img alt="food-logo" src={LOGO_URL}/>
    </div>
    <div className="nav-menu">
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li> Cart</li>
            <li><button className="login-btn" onClick={()=>{
                loginName == "LogIn" ? setloginName("LogOut") : setloginName("LogIn") 
            }}>{loginName}</button></li>
        </ul>
    </div>
    </div>
)
}

export default AppHeader;