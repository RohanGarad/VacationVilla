import { useState } from "react";
import AccountNav from "../AccountNav";
import { useEffect } from "react";
import axios from "axios";
import PlaceImg from "../PlaceImg";
import { Link } from "react-router-dom";
import BookingDates from "../BookingDates";

function BookingsPage() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get("/bookings").then((response) => {
      setBookings(response.data);
    });
  }, []);

  return (
    <div>
      <AccountNav />
      <div>
        <div>
          {bookings?.length > 0 &&
            bookings.map((booking, index) => (
              <Link
                to={`/account/bookings/${booking._id}`}
                key={index}
                className="flex gap-4 bg-gray-200 rounded-2xl overflow-hidden mb-6"
              >
                <div className="w-48 ">
                  <PlaceImg place={booking.place} />
                </div>

                <div className="text-black">
                  <h2 className="text-xl">{booking.place.title}</h2>
                  <BookingDates booking={booking} />
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BookingsPage;
