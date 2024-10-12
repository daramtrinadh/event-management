import './index.css';
import { FaLocationDot } from "react-icons/fa6";

const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
};
const EventCard = ({ event }) => {
    const { eventName, cityName,date,weather } = event;
    const formattedDate=formatDate(date);
    const testImage='https://img.freepik.com/free-photo/excited-audience-watching-confetti-fireworks-having-fun-music-festival-night-copy-space_637285-559.jpg?size=626&ext=jpg&ga=GA1.1.584529126.1723110023&semt=ais_hybrid-rr-similar';

    return (
        <div className="card">
            <div
                className="card-image"
                style={{ backgroundImage: `url(${testImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="event-city">
                    <p className="event-name">{eventName}</p>
                    <div className='location-section'>
                        <FaLocationDot/>
                        <p>{cityName}</p>
                    </div>
                </div>
                <div className='date-section'>
                    <p className="event-date">{formattedDate}</p>
                    <p className='event-date'>{weather}</p>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
