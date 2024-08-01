// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom"
// import BookingWidget from "./BookingWidget";
// import PlaceGallery from "../PlaceGallery";

// export default function PlacePage() {
//   const {id} = useParams();
//   const [place, setPlace] = useState(null);
  
//   useEffect(() => {
//     if(!id) {
//       return ;
//     }
    
//     // axios.get('/places/' + id)
//     axios.get(`/places/${id}`).then(response => {
//       setPlace(response.data);
//     });
//   }, [id])
  
//   if(!place) return '';
  
//   return (
//     <div className="mt-4 bg-gray-100 -mx-8 px-8">
//         <h1 className="text-3xl"> {place.title} </h1>
        

//         < PlaceGallery place={place} />

        
//         <div className="grid grid-cols-2 mt-6 gap-8">
//           <div>
//             <div className="my-4">
//               <h2 className="font-semibold text-2xl">Description</h2>
//               {place.description}
//             </div>
//             Check-In: (place.checkIn) <br /> 
//             Check-Out: (place.checkOut) <br /> 
//             Max Number of Guest: {place.maxGuests} 
//           </div>

//           <BookingWidget place={place}/>
//         </div>
        
//         <div className="bg-gray-50 mt-8 p-4 -mx-8 px-8">
//           <h2 className="font-semibold text-2xl">Extra Info: </h2>
//           <div className="text-gray-600">{place.extraInfo}</div>
//         </div>
//     </div>
//   );
// }


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import BookingWidget from "./BookingWidget";
// import PlaceGallery from "../PlaceGallery";

// export default function PlacePage() {
//   const { id } = useParams();
//   const [place, setPlace] = useState(null);

//   useEffect(() => {
//     if (!id) {
//       return;
//     }

//     axios.get(`/places/${id}`).then((response) => {
//       setPlace(response.data);
//     });
//   }, [id]);

//   if (!place) return null;

//   return (
//     <div className="mt-4 bg-gray-900 text-white px-8 py-6">
//       <h1 className="text-3xl font-semibold">{place.title}</h1>

//       <PlaceGallery place={place} />

//       <div className="grid grid-cols-2 mt-6 gap-8">
//         <div>
//           <div className="my-4">
//             <h2 className="font-semibold text-xl text-gray-300">Description</h2>
//             <p className="text-gray-300">{place.description}</p>
//           </div>
//           <p className="text-gray-300">
//             Check-In: {place.checkIn} <br />
//             Check-Out: {place.checkOut} <br />
//             Max Number of Guests: {place.maxGuests}
//           </p>
//         </div>

//         <BookingWidget place={place} />
//       </div>

//       <div className="bg-gray-800 mt-8 p-4">
//         <h2 className="font-semibold text-xl text-gray-300">Extra Info:</h2>
//         <p className="text-gray-300">{place.extraInfo}</p>
//       </div>
//     </div>
//   );
// }


// dark theme + responsive for mobiles
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookingWidget from "./BookingWidget";
import PlaceGallery from "../PlaceGallery";

export default function PlacePage() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    }

    axios.get(`/places/${id}`).then((response) => {
      setPlace(response.data);
    });
  }, [id]);

  if (!place) return null;

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">{place.title}</h1>

      <PlaceGallery place={place} />

      <div className="grid grid-cols-1 gap-4 mt-6 sm:gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <div className="my-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">Description</h2>
            <p className="text-gray-300">{place.description}</p>
          </div>
          <p className="text-gray-300">
            Check-In: {place.checkIn} <br />
            Check-Out: {place.checkOut} <br />
            Max Number of Guests: {place.maxGuests}
          </p>
        </div>

        <BookingWidget place={place} />
      </div>

      <div className="bg-gray-800 mt-8 p-4 sm:p-5 md:p-6">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-300">Extra Info:</h2>
        <p className="text-gray-300">{place.extraInfo}</p>
      </div>
    </div>
  );
}
