// import { Link } from "react-router-dom";
// import AccountNav from "../AccountNav";
// import { useEffect, useState } from "react";
// import axios from "axios";

// function PlacesPage() {
//   const [places, setPlaces] = useState([]);

//   useEffect(() => {
//     axios.get("/user-places").then(({ data }) => {
//       setPlaces(data);
//     });
//   }, []);

//   return (
//     <div>
//       <AccountNav />
//       <div className="mt-6 text-center">
//         <Link
//           className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
//           to={"/account/places/new"}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//           Add New Place
//         </Link>
//       </div>

//       <div className="mt-4 justify-center text-center">
//         {places.length > 0 &&
//           places.map((place, index) => (
//             <Link
//               key={index}
//               to={"/account/places/" + place._id}
//               className="cursor-pointer flex gap-4 bg-gray-100 p-4 rounded-xl"
//             >
//               <div className="flex min-h-32 bg-gray-300 grow shrink-0">
//                 {place.photos.length > 0 && (
//                   <img
//                     className="h-32 "
//                     src={"http://localhost:4000/uploads/" + place.photos[0]}
//                     alt="Image"
//                   />
//                 )}
//               </div>
//               <div>
//                 <h1 className="text-xl"> {place.title} </h1>
//                 <p className="text-sm mt-2 mx-2">{place.description}</p>
//               </div>
//             </Link>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesPage;


// +mobile view
import { Link } from "react-router-dom";
import AccountNav from "../AccountNav";
import { useEffect, useState } from "react";
import axios from "axios";

function PlacesPage() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    axios.get("/user-places").then(({ data }) => {
      setPlaces(data);
    });
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <AccountNav />
      <div className="mt-6 text-center">
        <Link
          className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full hover:bg-pink-600 transition duration-300"
          to={"/account/places/new"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Add New Place
        </Link>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center">
        {places.length > 0 &&
          places.map((place, index) => (
            <Link
              key={index}
              to={"/account/places/" + place._id}
              className="cursor-pointer flex flex-col md:flex-row gap-4 bg-gray-800 p-4 rounded-xl transition duration-300 hover:bg-gray-700"
            >
              <div className="flex-shrink-0 w-full md:w-1/3">
                {place.photos.length > 0 && (
                  <img
                    className="w-full h-64 object-cover rounded-lg"
                    src={"http://localhost:4000/uploads/" + place.photos[0]}
                    alt="Place"
                  />
                )}
              </div>
              <div className="flex flex-col justify-center w-full md:w-2/3">
                <h1 className="text-xl font-semibold">{place.title}</h1>
                <p className="text-sm mt-2">{place.description}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PlacesPage;
