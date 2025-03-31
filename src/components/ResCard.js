
import { CDN_URL } from "../utils/constant"

const ResCard = (props) => {
    const {restData} = props
    const {cloudinaryImageId,name,cuisines, avgRatingString,sla } = restData?.info
    return (
    <div className="res-card">
        <div className="res-img">
            <img alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
        </div>
        <div className="res-data">
            <span className="res-name">{name}</span>
            <div className="rate-sla">
            <span className="rating">✩{avgRatingString}</span>
            <span>{sla?.slaString}</span>
            </div>
            <span>{cuisines.join(", ")}</span>
        </div>
    </div>
    )
}


export default ResCard;