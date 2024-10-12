import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import EventCard from "../EventCard";
import LoadingSpinner from '../LoadingSpinner';
import Header from '../Header';
import UpComingEvent from "../UpComingEvent";
import { useEffect, useState } from 'react';
import './index.css';

const Home = () => {
    const [recommendedEvents, setRecommendedEvents] = useState([]);
    const [upcomingEvents, setUpcomingEvents] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchRecommendedEvents = async () => {
            try {
                const url = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco";
                const response = await fetch(url);
                const data = await response.json();
                const formattedEvents = data.events.map(event => ({
                    ...event,
                    imgUrl: `https://drive.google.com/uc?export=view&id=${event.imgUrl.split('/d/')[1].split('/')[0]}`
                }));
                setRecommendedEvents(formattedEvents);
            } catch (error) {
                console.error("Error fetching recommended events:", error);
            }
        };
        fetchRecommendedEvents();
    }, []);

    const fetchUpcomingEvents = async () => {
        if (isLoading || !hasMore) return;
        setIsLoading(true);
        try {
            const url = `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`;
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            if (data && data.events && data.events.length > 0) {
                setUpcomingEvents((prevEvents) => [...prevEvents, ...data.events]);
            } else {
                setHasMore(false);
            }
        } catch (error) {
            console.error('Error fetching upcoming events:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleScroll = () => {
        if (
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
            !isLoading && hasMore
        ) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [hasMore, isLoading]);

    useEffect(() => {
        fetchUpcomingEvents();
    }, [page]);

    return (
        <div>
            <Header />
            <div className='home-section'>
                <div className='details'>
                    <h1 className='home-head'>Discover Exciting Events Happening Near You - Stay Tuned For Updates!</h1>
                    <p className='home-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='recommend-section'>
                    <div className="recommend-first-part">
                        <p>Recommended Shows</p>
                        <FaArrowRightLong className="right-arrow" />
                    </div>
                    <div className="recommend-second-part">
                        <p className="see-all-text">See All</p>
                        <MdOutlineKeyboardArrowRight />
                    </div>
                </div>
            </div>
            <div className="events-list">
                {recommendedEvents.map((eachEvent, index) => (
                    <EventCard event={eachEvent} key={index} imgNo={index} />
                ))}
            </div>
            <div className="upcoming-events">
                <div className="upcoming-events-first-part">
                    <p>Upcoming Events</p>
                    <FaArrowRightLong className="right-arrow-black" />
                </div>
                <div className="upcoming-events-second-part">
                    <p className="see-all-text">See All</p>
                    <MdOutlineKeyboardArrowRight />
                </div>
            </div>
            <div className="upcoming-events-list">
                {upcomingEvents.map((eachEvent, index) => (
                    <UpComingEvent event={eachEvent} key={index} />
                ))}
            </div>
            {isLoading && <LoadingSpinner />}
        </div>
    );
};

export default Home;
