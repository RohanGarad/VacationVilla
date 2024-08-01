// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "./UserContext.jsx";

// export default function Header() {
//   const { user } = useContext(UserContext);

//   return (
//     <header className="flex justify-between">
//       <Link to={'/'} className="flex gap-1 items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 -rotate-90"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
//           />
//         </svg>

//         <span className="font-bold text-xl">Airbnb</span>
//       </Link>

//       <div className="flex border gap-2 border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
//         <div>AnyWhere</div>
//         <div className="border-l border-gray-300"></div>
//         <div>Any Week</div>
//         <div className="border-l border-gray-300"></div>
//         <div>Add guests</div>
//         <button className="bg-primary rounded-full text-white p-1 hover:bg-pink-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>
//       </div>

//       <Link
//         to={user?'/account':"/login"}
//         className="flex items-center border gap-2 border-gray-300 rounded-full py-2 px-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//         <div className="bg-gray-500 rounded-full text-white overflow-hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6 relative top-1"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//         {!!user && ( //!! to convert to boolean
//           <div>{user.name}</div>
//         )}
//       </Link>
//     </header>
//   );
// }

// import { useContext } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "./UserContext.jsx";

// export default function Header() {
//   const { user } = useContext(UserContext);

//   return (
//     <header className="bg-gray-900 text-white flex justify-between p-4 shadow-md">
//       <Link to={'/'} className="flex gap-1 items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 -rotate-90 text-white"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
//           />
//         </svg>

//         <span className="font-bold text-xl">VacationVilla</span>
//       </Link>

//       <div className="flex border gap-2 border-gray-700 rounded-full py-2 px-4 shadow-md shadow-gray-700">
//         <div>Anywhere</div>
//         <div className="border-l border-gray-700"></div>
//         <div>Any Week</div>
//         <div className="border-l border-gray-700"></div>
//         <div>Add guests</div>
//         <button className="bg-primary rounded-full text-white p-1 hover:bg-pink-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>
//       </div>

//       <Link
//         to={user ? '/account' : "/login"}
//         className="flex items-center border gap-2 border-gray-700 rounded-full py-2 px-2"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6 text-white"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//         <div className="bg-gray-500 rounded-full text-white overflow-hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6 relative top-1"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//         {!!user && ( // !! to convert to boolean
//           <div>{user.name}</div>
//         )}
//       </Link>
//     </header>
//   );
// }


// // dark theme + Mobile respomsive for mobile
// import { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { UserContext } from "./UserContext.jsx";

// export default function Header() {
//   const { user } = useContext(UserContext);
//   const [showLocationDropdown, setShowLocationDropdown] = useState(false);
//   const [showDateDropdown, setShowDateDropdown] = useState(false);
//   const [showGuestDropdown, setShowGuestDropdown] = useState(false);

//   return (
//     <header className="bg-gray-900 text-white flex justify-between items-center p-4 shadow-md sticky top-0 z-50">
//       <Link to={'/'} className="flex gap-1 items-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-8 h-8 -rotate-90 text-white"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
//           />
//         </svg>
//         <span className="font-bold text-xl">VacationVilla</span>
//       </Link>

//       <div className="hidden md:flex border gap-2 border-gray-700 rounded-full py-2 px-4 shadow-md shadow-gray-700 relative">
//         <div
//           className="cursor-pointer hover:text-gray-400 relative"
//           onMouseEnter={() => setShowLocationDropdown(true)}
//           onMouseLeave={() => setShowLocationDropdown(false)}
//         >
//           Anywhere
//           {showLocationDropdown && (
//             <div className="absolute top-10 left-0 bg-white text-black p-2 rounded-lg shadow-lg">
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">Location 1</p>
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">Location 2</p>
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">Location 3</p>
//             </div>
//           )}
//         </div>
//         <div className="border-l border-gray-700"></div>
//         <div
//           className="cursor-pointer hover:text-gray-400 relative"
//           onMouseEnter={() => setShowDateDropdown(true)}
//           onMouseLeave={() => setShowDateDropdown(false)}
//         >
//           Any Week
//           {showDateDropdown && (
//             <div className="absolute top-10 left-20 bg-white text-black p-2 rounded-lg shadow-lg">
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">Week 1</p>
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">Week 2</p>
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">Week 3</p>
//             </div>
//           )}
//         </div>
//         <div className="border-l border-gray-700"></div>
//         <div
//           className="cursor-pointer hover:text-gray-400 relative"
//           onMouseEnter={() => setShowGuestDropdown(true)}
//           onMouseLeave={() => setShowGuestDropdown(false)}
//         >
//           Add Guests
//           {showGuestDropdown && (
//             <div className="absolute top-10 left-40 bg-white text-black p-2 rounded-lg shadow-lg">
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">1 Guest</p>
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">2 Guests</p>
//               <p className="p-2 hover:bg-gray-200 cursor-pointer">3 Guests</p>
//             </div>
//           )}
//         </div>
//         <button className="bg-primary rounded-full text-white p-1 hover:bg-pink-600">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-4"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//             />
//           </svg>
//         </button>
//       </div>

//       <Link
//         to={user ? '/account' : "/login"}
//         className="flex items-center border gap-0 border-gray-700 rounded-full py-2 px-2 hover:bg-gray-700 transition"
//       >
        
//         <div className="bg-gray-500 rounded-full text-white overflow-hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="w-6 h-6 relative top-1"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//         {!!user && ( // !! to convert to boolean
//           <div className="ml-2">{user.name}</div>
//         )}
//       </Link>

//       <div className="md:hidden flex items-center">
//         <button className="bg-gray-700 p-2 rounded-full focus:outline-none">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6 text-white"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//             />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// }


import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

export default function Header() {
  const { user } = useContext(UserContext);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showGuestDropdown, setShowGuestDropdown] = useState(false);

  return (
    <header className="bg-gray-900 text-white flex justify-between items-center p-4 shadow-md sticky top-0 z-50">
      {/* Logo and Title */}
      <Link to={'/'} className="flex gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
        <span className="font-bold text-2xl">VacationVilla</span>
      </Link>

      {/* Navigation for Desktop */}
      <div className="hidden md:flex border gap-2 border-gray-700 rounded-full py-2 px-4 shadow-md shadow-gray-700 relative">
        <div
          className="cursor-pointer hover:text-gray-400 relative"
          onMouseEnter={() => setShowLocationDropdown(true)}
          onMouseLeave={() => setShowLocationDropdown(false)}
        >
          Anywhere
          {showLocationDropdown && (
            <div className="absolute top-12 left-0 bg-white text-black p-2 rounded-lg shadow-lg">
              <p className="p-2 hover:bg-gray-200 cursor-pointer">Location 1</p>
              <p className="p-2 hover:bg-gray-200 cursor-pointer">Location 2</p>
              <p className="p-2 hover:bg-gray-200 cursor-pointer">Location 3</p>
            </div>
          )}
        </div>
        <div className="border-l border-gray-700"></div>
        <div
          className="cursor-pointer hover:text-gray-400 relative"
          onMouseEnter={() => setShowDateDropdown(true)}
          onMouseLeave={() => setShowDateDropdown(false)}
        >
          Any Week
        </div>
        <div className="border-l border-gray-700"></div>
        <div
          className="cursor-pointer hover:text-gray-400 relative"
          onMouseEnter={() => setShowGuestDropdown(true)}
          onMouseLeave={() => setShowGuestDropdown(false)}
        >
          Add Guests
        </div>
        <button className="bg-primary rounded-full text-white p-2 hover:bg-pink-600 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </div>

      {/* Profile Link */}
      <Link
        to={user ? '/account' : "/login"}
        className="flex items-center border gap-2 border-gray-700 rounded-full py-2 px-4 hover:bg-gray-700 transition"
      >
        <div className="bg-gray-500 rounded-full text-white overflow-hidden p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {!!user && ( // !! to convert to boolean
          <div className="ml-2 text-sm">{user.name}</div>
        )}
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button className="bg-gray-700 p-2 rounded-full focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
