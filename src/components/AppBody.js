
import restDataVal from "../utils/mockData";
import ResCard from "./ResCard";
import { useState } from "react";


const AppBody = () => {

const [listOfRestaurant, setListOfRestaurant] = useState(restDataVal)
return (
    <div className="body-container">
        <button className="filter-btn" onClick={()=>{
            const filterRestaurant = listOfRestaurant.filter((res)=>res.info.avgRating>4.5)
            setListOfRestaurant(filterRestaurant)
        }
        }>Filter the Restaurant</button>
        <div className="res-container">
            {listOfRestaurant.map((restaurant) => (
                <ResCard key = {restaurant.info.id} restData={restaurant} />
            ))
            }
        </div>
    </div>
)
}


export default AppBody;
