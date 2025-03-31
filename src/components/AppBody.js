
import ResCard from "./ResCard";
import { useEffect, useState } from "react";


const AppBody = () => {

const [listOfRestaurant, setListOfRestaurant] = useState([])
const [searchFilterRestaurant, setSearchFilterRestaurant] = useState([])

const [ inputValue, setInputValue] = useState("")

useEffect(()=>{fetchData()},[])

const proxyUrl = "https://api.allorigins.win/get?url=";
const targetUrl = encodeURIComponent("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.586409940195686&lng=85.15990152955055&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
const fetchData = async () => {
    const response = await fetch(proxyUrl + targetUrl);
    const data = await response.json();
    const contents = data?.contents
    const restaurntList = JSON.parse(contents)?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListOfRestaurant(restaurntList)
    setSearchFilterRestaurant(restaurntList)
};

return (
    <div className="body-container">
        <div className="filter">
        <input className="search-box" type="text" value = {inputValue} onChange={(e)=> {setInputValue(e.target.value)}}/>
        <button className="search-btn" onClick={()=> {
            const filterSearchRestaurant = listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(inputValue.toLowerCase()));
            setSearchFilterRestaurant(filterSearchRestaurant)
        }
        }>Search </button>
        <button className="filter-btn" onClick={()=>{
            const filterRestaurant = listOfRestaurant.filter((res)=>res.info.avgRating>=4.5)
            setSearchFilterRestaurant(filterRestaurant)
        }
        }>Filter the Restaurant</button>
        </div>
        <div className="res-container">
            {searchFilterRestaurant.map((restaurant) => (
                <ResCard key = {restaurant.info.id} restData={restaurant} />
            ))
            }
        </div>
    </div>
)
}


export default AppBody;
