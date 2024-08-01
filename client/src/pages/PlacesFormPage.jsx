import { useState } from "react";
import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import axios from "axios";
import AccountNav from "../AccountNav";
import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

export default function PlacesFormPage() {
  const {id} = useParams();
  // console.log({id});
  const [perks, setPerks] = useState([]);
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [description, setDescription] = useState("");
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState(1);
  const [checkOut, setCheckOut] = useState(1);
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(100);
  const [redirect, setRedirect] = useState(false);

  useEffect(()=> {
    if (!id) {
      return ;
    }
    axios.get('/places/'+id).then(response => { //fetching
      const {data} = response;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn)
      setCheckOut(data.checkOut)
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
    // // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function inputHeader(text) {
    return <h2 className="text-2xl mt-4">{text}</h2>;
  }

  function inputDescription(text) {
    return <p className="text-gray-400 text-sm">{text}</p>;
  }

  function preInput(header, description) {
    return (
      <>
        {inputHeader(header)}
        {inputDescription(description)}
      </>
    );
  }

  async function savePlace(ev) {
    if(id) {
      ev.preventDefault();
      await axios.put('/places', {id, title, address, perks, addedPhotos, description, extraInfo, checkIn, checkOut, maxGuests, price});
      setRedirect(true);
    }
    else {
      ev.preventDefault();
      await axios.post('/places', {title, address, perks, addedPhotos, description, extraInfo, checkIn, checkOut, maxGuests, price});
      setRedirect(true);
    }
  }

  if(redirect) {
    return <Navigate to={'/account/places'} />
  }
  

  return (
    <div>
      <AccountNav />
      <form onSubmit={savePlace}>
        {preInput("Title", "Add title to your place here !")}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title, e.g. My lovely Apartment !"
          className="text-black"
        />
        {preInput("Address", "Add address here")}
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="Address"
          className="text-black"
        />

        {preInput("Photos", "More = Better!")}
        <PhotosUploader addedPhotos={addedPhotos} onChange={setAddedPhotos} />

        {inputHeader("Description:")}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your place"
          className="text-black"
        />

        {preInput("Perks", "Select all the perks of your place")}

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 justify-center mx-auto">
          <Perks selected={perks} onChange={setPerks} />
        </div>

        {preInput("Extra Information", "Like, House Rules")}
        <textarea
          value={extraInfo}
          onChange={(e) => setExtraInfo(e.target.value)}
          placeholder="Add extra information here"
          className="text-black"
        />

        {preInput(
          "Check In and Check Out Time:",
          "Add check in and out time here:"
        )}

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="mt-2 text-center">Check-In time: </h3>
            <input
              type="Number"
              placeholder="09:00 AM"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 text-center">Check-Out time: </h3>
            <input
              type="Number"
              placeholder="06:00 PM"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 text-center">Max Number of Guests</h3>
            <input
              type="Number"
              placeholder="23"
              value={maxGuests}
              onChange={(e) => setMaxGuests(e.target.value)}
            />
          </div>
          <div>
            <h3 className="mt-2 text-center">Price per Night</h3>
            <input
              type="Number"
              placeholder="100"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div> */}

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="mt-2 text-center">Check-In time: </h3>
            <input
              type="number"
              placeholder="09:00 AM"
              value={checkIn}
              onChange={(e) => setCheckIn(Number(e.target.value))}
              className="text-black"
            />
          </div>
          <div>
            <h3 className="mt-2 text-center">Check-Out time: </h3>
            <input
              type="number"
              placeholder="06:00 PM"
              value={checkOut}
              onChange={(e) => setCheckOut(Number(e.target.value))}
              className="text-black"
            />
          </div>
          <div>
            <h3 className="mt-2 text-center">Max Number of Guests</h3>
            <input
              type="number"
              placeholder="23"
              value={maxGuests}
              onChange={(e) => setMaxGuests(Number(e.target.value))}
              className="text-black"
            />
          </div>
          <div>
            <h3 className="mt-2 text-center">Price per Night</h3>
            <input
              type="number"
              placeholder="100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="text-black"
            />
          </div>
        </div>

        <button className="primary my-4 border border-black font-semibold">
          SAVE
        </button>
      </form>
    </div>
  );
}
