import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RestaurantMenu_API } from "../utils/constant";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null)

  const resid = useParams()
  console.log(resid)
  useEffect(() => {
    const fetchMenu = async () => {
      const proxyUrl = "http://api.allorigins.win/get?url=";
      const targetUrl = encodeURIComponent(
        RestaurantMenu_API+"254135"
        // 524423  1003414
      );

      try {
        const data = await fetch(proxyUrl + targetUrl);
        const response = await data.json();
        const menuItem  = JSON.parse(response.contents)
        console.log(menuItem)
        // setResInfo(menuItem)
      } catch (err) {
        console.error("Error fetching menu", err);
      }
    };
    

    fetchMenu();
  }, []);


  console.log(resInfo)

  return(
  <div className="menu">menu
    
    
    
    {/* <h1>{resInfo?.data?.cards[2]?.card?.card?.info?.name}</h1>
  <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
    </h3>
    <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.avgRatingString + "("+ resInfo?.data?.cards[2]?.card?.card?.info?.totalRatingsString + ")"}
    </h3>

    <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.cuisines}
    </h3>
    <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.sla?.slaString}
    </h3>
    <h3>{resInfo?.data?.cards[2]?.card?.card?.info?.locality}
    </h3> */}

    


    
    </div>
  )
  
};

export default RestaurantMenu;
