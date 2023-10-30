//router.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Nav from "../Containers/Nav/Nav";
import Footer from "../Containers/Footer/Footer";
import Error404 from "../Pages/Error404/Error404";
import SignIn from "../Pages/SignIn/SIgnIn";
import Profile from "../Pages/User/Profile";
// import TestComponent from "../components/TestComponent/TestComponent";
import EditUsername from "../Pages/EditUsername/EditUsername";
export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      {/* <TestComponent /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit-username" element={<EditUsername />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
