import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import PlaceGallery from '../PlaceGallery';
import BookingDates from '../BookingDates';


function BookingPage() {
  const {id} = useParams();
  const [booking, setBooking] = useState(null);
  useEffect(() => {
    if(id) {
      axios.get('/bookings').then(response => {
        const foundBooking = response.data.find(({_id}) => _id === id);
        if(foundBooking) {
          setBooking(foundBooking);
        }
      });
    }
  }, [id]);

  if(!booking) {
    return '';
  }

  return (
    <div>
      <div className='text-3xl'>
        {booking.place.title}
      </div>

      <div className='bg-gray-200 px-1 py-3 rounded-2xl mt-4 text-black'>
        <h1 className='text-xl'>Your Booking Information</h1>
        <BookingDates booking={booking}/>
      </div>

      <PlaceGallery place={booking.place}/>
    </div>
  )
}

export default BookingPage