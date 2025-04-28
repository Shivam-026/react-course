import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";


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
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/about">About Us</Link></li>
            <li><Link to= "/contact">Contact</Link></li>
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