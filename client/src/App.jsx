import { Routes, Route } from "react-router-dom";
// import "./App.css";
import LoginPage from "./pages/LoginPage.jsx";
import Layout from "./Layout.jsx";
import IndexPage from "./pages/IndexPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

import axios from "axios";
import { UserContextProvider } from "./UserContext.jsx";
import PlacesPage from "./pages/PlacesPage.jsx";
import PlacesFormPage from "./pages/PlacesFormPage.jsx";
import PlacePage from "./pages/PlacePage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import BookingPage from "./pages/BookingPage.jsx";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

// The entire App component is wrapped in the UserContextProvider.
// This ensures that the user context (likely containing user data) is available to any child components within your application.

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage/>}></Route>
          <Route path="/account/places" element={<PlacesPage/>}></Route>
          <Route path="/account/places/new" element={<PlacesFormPage/>}></Route>
          <Route path="/account/places/:id" element={<PlacesFormPage/>}></Route>   
          {/* :id - param */}
          <Route path="/places/:id" element={<PlacePage/>} />
          <Route path="/account/bookings" element={<BookingsPage />}></Route>
          <Route path="/account/bookings/:id" element={<BookingPage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;