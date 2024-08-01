// import axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);
//   useEffect(() => {
//     axios.get('/places').then(response => {
//       setPlaces(response.data);
//     })
//   })
//   return (
//     <div className="mb-8 mt-10 gap-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//       {places.length > 0 && places.map((place, index) => (
//         <Link to={'/places/' + place._id} key={index}>
//           <div className="rounded-2xl flex">
//             {place.photos?.[0] && (
//               <img className="max-h-72 object-cover aspect-square" src={'http://localhost:4000/uploads/' + place.photos?.[0]} />
//             )}  
//           </div>
//           <h3 className="font-bold">{place.address}</h3>
//           <h2 className="text-sm text-gray-500"> {place.title} </h2>
//           <h3 className="mt-1"> <span className="font-semibold">${place.price}</span>  per Night</h3>
//         </Link>
//       ))}
//     </div>
//   );
// }


// new code: 
// import axios from "axios";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function IndexPage() {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios.get('/places').then(response => {
//       setPlaces(response.data);
//     })
//   }, []);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen p-6">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {places.length > 0 && places.map((place, index) => (
//             <Link to={`/places/${place._id}`} key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105">
//               <div className="relative">
//                 {place.photos?.[0] && (
//                   <img className="w-full h-64 object-cover" src={`http://localhost:4000/uploads/${place.photos?.[0]}`} alt="place" />
//                 )}
//               </div>
//               <div className="p-4">
//                 <h3 className="text-xl font-bold">{place.address}</h3>
//                 <p className="text-sm text-gray-400">{place.title}</p>
//                 <div className="flex items-center mt-2">
//                   <span className="text-yellow-500 font-semibold">${place.price}</span>
//                   <span className="text-xs ml-1">per Night</span>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


// dark + mobile: 
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get('/places').then(response => {
      setPlaces(response.data);
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {places.length > 0 && places.map((place, index) => (
            <Link
              to={`/places/${place._id}`}
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:bg-gray-700 transition duration-300 transform hover:scale-105"
            >
              <div className="relative">
                {place.photos?.[0] && (
                  <img
                    className="w-full h-48 sm:h-64 object-cover"
                    src={`http://localhost:4000/uploads/${place.photos?.[0]}`}
                    alt="place"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-lg md:text-xl font-bold">{place.address}</h3>
                <p className="text-xs md:text-sm text-gray-400">{place.title}</p>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-500 font-semibold">${place.price}</span>
                  <span className="text-xs ml-1">per Night</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
}
