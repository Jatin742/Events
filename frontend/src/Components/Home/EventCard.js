import React from 'react'
import { Link } from 'react-router-dom'

export function formattedDate(data) {
  const d=new Date(data.timingOfEvent);

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();
  return `${day}-${month}-${year}`;
}

const EventCard = ({event}) => {
  
  return (
    <Link className='eventCard' to={`/event/${event._id}`}>
      <img className='image' src={event.image} alt={event.title} />
      <div className="box1">
          <p className='eventName'>{event.title}</p>
          <p className='eventDate'>{formattedDate(event)}</p>
      </div>
      <p className='registrations'>{event.numberOfRegistrations} registerations</p>
    </Link>
  )
}

export default EventCard