/* eslint-disable react/prop-types */
import { useState } from "react";

export default function PlaceGallery({place}) {
    const [showAllPhotos, setShowAllPhotos] = useState(false);
    if(showAllPhotos) {
      return (
        <div className="absolute inset-0 min-h-screen text-white">
          <div className="bg-black p-8 grid gap-4">
            <h2 className="text-3xl text-center my-6 underline">Photos of {place.title} </h2>
            <div className="grid grid-cols-2 gap-6 rounded-2xl">
              <button onClick={() => setShowAllPhotos(false)} className="flex gap-2 bg-black fixed bottom-12 right-10 py-2 px-4" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
                Close photos
              </button>
  
              {place?.photos?.length > 0 && place.photos.map((photo, index) => (
                <div key={index}> 
                  <img src={"http://localhost:4000/uploads/" + photo}/>
                </div>
              ))}  
            </div>
          </div>
        </div>
      );
    }

  return (
    <div>
        <a className="my-2 font-semibold underline flex gap-2 mb-4" target="_blank" href={"https://maps.google.com/?q=" + place.address}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          {place.address} 
        </a>

        <div className="relative">
          <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-2xl overflow-hidden">
            <div className="">
              {place.photos?.[0] && (
                <img className="aspect-square object-cover rounded-l-2xl" src={'http://localhost:4000/uploads/' + place.photos[0]} />
              )}
            </div>
            <div className="grid">
              {place.photos?.[1] && (
                <img className="aspect-square object-cover rounded-r-2xl" src={'http://localhost:4000/uploads/' + place.photos[1]} />
              )}
              <div className="overflow-hidden">
                {place.photos?.[2] && (
                  <img className="relative top-2 aspect-square object-cover rounded-r-2xl" src={'http://localhost:4000/uploads/' + place.photos[2]} />
                )}
              </div>
            </div>
          </div>
          
          <button onClick={() => setShowAllPhotos(true)} className="flex gap-2 text-black absolute bottom-0 right-0 m-2 py-2 px-4 bg-white rounded-3xl hover:bg-gray-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <h1>Show More Photos</h1>
          </button>
        </div>
    </div>
  )
}