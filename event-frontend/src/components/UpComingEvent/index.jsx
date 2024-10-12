import { IoLocationOutline } from "react-icons/io5";

import './index.css'
const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};
const UpComingEvent=({event})=>{
    const { eventName, cityName,date,weather } = event;
    const formattedDate=formatDate(date)
    return(
        <div className='upcoming-event-card'>
            <div className="image-container">
                <img src="https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600" alt="upcomingevent" className="event-image"/>
                <p className="overlay-text">{formattedDate}</p>

            </div>
            
            
            <h3>{eventName}</h3>
            <div className="upcoming-event-details">
                <div className="upcoming-location-details">
                    <IoLocationOutline/>
                    <p>{cityName}</p>
                </div>
                <p>{weather}</p>
            </div>
           
            
        </div>

    )
}
export default UpComingEvent