
import { CDN_URL } from "../utils/constant"

const ResCard = (props) => {
    const {restData} = props
    const {cloudinaryImageId,name,cuisines, avgRatingString } = restData?.info
    return (
    <div className="res-card">
        <div className="res-img">
            <img alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        </div>
        <div className="res-data">
            <h2>{name}</h2>
            <span>{cuisines.join(", ")}</span>
            <span>{restData.info.sla.deliveryTime} min</span>
            <span>{avgRatingString} ✩</span>
        </div>
    </div>
    )
}


export default ResCard;