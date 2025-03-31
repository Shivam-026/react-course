import { LOGO_URL } from "../utils/constant";


const AppHeader = ()=>
{
    
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
        </ul>
    </div>
    </div>
)
}

export default AppHeader;