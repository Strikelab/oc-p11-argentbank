import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Nav from "../Containers/Nav/Nav";
import Footer from "../Containers/Footer/Footer";
import Error404 from "../Pages/Error404/Error404";
import SignIn from "../components/SignIn/SIgnIn";
import User from "../components/User/User";
export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
