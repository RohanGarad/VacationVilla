// /* eslint-disable react/prop-types */
// import { useState } from "react";
// import axios from "axios";
// import {differenceInCalendarDays} from "date-fns";
// import { Navigate } from "react-router-dom";
// import { useContext } from "react";
// import { UserContext } from "../UserContext";
// import { useEffect } from "react";

// // eslint-disable-next-line react/prop-types
// export default function BookingWidget({place}) {
//   const [checkIn, setcheckIn] = useState('');
//   const [checkOut, setcheckOut] = useState('');
//   const [numOfGuests, setNumOfGuests] = useState(1);
//   const [phone, setPhone] = useState('');
//   const [name, setName] = useState('');
//   const [redirect, setRedirect] = useState('');
//   const {user} = useContext(UserContext);

//   useEffect (() => {
//     if (user) {
//       setName(user.name);
//     }
//   }, [user]);

//   let numberOfDays = 0;
//   if(checkIn && checkOut) {
//     numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
//   }

//   async function bookThisPlace() {
//     const data = {
//       checkIn, checkOut, numOfGuests, name, phone, 
//       price: numberOfDays * place.price,
//       place: place._id,user,
//     };
//     const response = await axios.post('/bookings', data);

//     const bookingId = response.data._id;
//     setRedirect(`/account/bookings/${bookingId}`);
//   }

//   if (redirect) {
//     return <Navigate to={redirect} />
//   }

//   return (
//     <div className="bg-white shadow p-4 rounded-2xl text-black">
//       <div className="text-2xl text-center">
//         Price: {place.price} / per Night
//       </div>

//       <div className="border mt-4 grid grid-cols-2">
//         <div className="py-4 px-7 border-r">
//           <label htmlFor="">Check In: </label>
//           <input
//             type="date"
//             value={checkIn}
//             onChange={(ev) => setcheckIn(ev.target.value)}
//           />
//         </div>

//         <div className="py-4 px-7 border-t ">
//           <label htmlFor="">Check Out: </label>
//           <input
//             type="date"
//             value={checkOut}
//             onChange={(ev) => setcheckOut(ev.target.value)}
//           />
//         </div>
//       </div>

//       <div className="px-7 border-t border">
//         <label htmlFor="">Max Gussts: </label>
//         <input
//           type="number"
//           value={numOfGuests}
//           onChange={(ev) => setNumOfGuests(ev.target.value)}
//         />
//       </div>

//       {numberOfDays > 0 && (
//         <div className="px-7 border-t border">
//         <label htmlFor="">Your Name: </label>
//         <input
//           type="text"
//           placeholder="Rohan Garad"
//           value={name}
//           onChange={(ev) => setName(ev.target.value)}
//         />
//         <label htmlFor="">Your Number: </label>
//         <input
//           type="tel"
//           placeholder="123 654 789"
//           value={phone}
//           onChange={(ev) => setPhone(ev.target.value)}
//         />
//         </div>
//       )}


//       <button onClick={bookThisPlace} className="primary font-semibold text-lg">
//         Book This Place
//         {numberOfDays > 0 && (
//           <span> ${numberOfDays * place.price}</span>
//         )}
//       </button>
//     </div>
//   );
// }

/* eslint-disable react/prop-types */
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { differenceInCalendarDays } from "date-fns";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

// eslint-disable-next-line react/prop-types
export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numOfGuests, setNumOfGuests] = useState(1);
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState('');
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfDays = 0;
  if (checkIn && checkOut) {
    numberOfDays = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
  }

  async function bookThisPlace() {
    const data = {
      checkIn, checkOut, numOfGuests, name, phone,
      price: numberOfDays * place.price,
      place: place._id, user,
    };
    const response = await axios.post('/bookings', data);

    const bookingId = response.data._id;
    setRedirect(`/account/bookings/${bookingId}`);
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl text-black">
      <div className="text-lg md:text-2xl text-center font-semibold">
        Price: ${place.price} / per Night
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="py-4 px-4 md:px-7 border rounded-lg">
          <label htmlFor="checkIn" className="block text-sm font-medium">Check In:</label>
          <input
            id="checkIn"
            type="date"
            value={checkIn}
            onChange={(ev) => setCheckIn(ev.target.value)}
            className="mt-1 w-full border rounded-md p-2"
          />
        </div>

        <div className="py-4 px-4 md:px-7 border rounded-lg">
          <label htmlFor="checkOut" className="block text-sm font-medium">Check Out:</label>
          <input
            id="checkOut"
            type="date"
            value={checkOut}
            onChange={(ev) => setCheckOut(ev.target.value)}
            className="mt-1 w-full border rounded-md p-2"
          />
        </div>
      </div>

      <div className="py-4 px-4 md:px-7 border rounded-lg mt-4">
        <label htmlFor="numOfGuests" className="block text-sm font-medium">Max Guests:</label>
        <input
          id="numOfGuests"
          type="number"
          value={numOfGuests}
          onChange={(ev) => setNumOfGuests(ev.target.value)}
          className="mt-1 w-full border rounded-md p-2"
        />
      </div>

      {numberOfDays > 0 && (
        <div className="py-4 px-4 md:px-7 border rounded-lg mt-4">
          <label htmlFor="name" className="block text-sm font-medium">Your Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Rohan Garad"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className="mt-1 w-full border rounded-md p-2"
          />
          <label htmlFor="phone" className="block text-sm font-medium mt-2">Your Number:</label>
          <input
            id="phone"
            type="tel"
            placeholder="123 654 789"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            className="mt-1 w-full border rounded-md p-2"
          />
        </div>
      )}

      <button
        onClick={bookThisPlace}
        className="w-full mt-4 bg-primary rounded-full text-white py-2 px-4 font-semibold text-lg hover:bg-pink-600 transition-colors"
      >
        Book This Place
        {numberOfDays > 0 && (
          <span className="ml-2">${numberOfDays * place.price}</span>
        )}
      </button>
    </div>
  );
}
