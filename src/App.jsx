import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { About, Aboutus, Awards, Chef, Nav } from "./Components";
import {
  Home,
  BlogPage,
  MenuPage,
  AboutusPage,
  OurServices,
  Pages,
  SignIn,
  SignUp,
  TablePage,
} from "./Pages";
import "./App.css";
import OurChef from "./Pages/Pages/OurChef";
import Contactus from "./Pages/Pages/Contactus";
import Landing from "./Pages/Landing/Landing";
import ScrollToTop from "./Components/ScrollToTop";
import { MyContext } from "../MyContext";
const accessKey = "zwTgacSWTV4UweSL2G1cKFPtPMtKQyJG7hBmlYtNKBo";
const query = "food";
const api = `https://api.unsplash.com/search/photos?query=${query}&client_id=${accessKey}`;

export default function App() {
  const { setReceipes } = useContext(MyContext);
  useEffect(() => {
    const getBlog = async () => {
      const res = await fetch(`${api}`);
      const data = await res.json();
      console.log(data);
      setReceipes(data.results || []);
      // SVGMetadataElement()
    };
    getBlog();
  }, []);
  return (
    <div className="app__bg">
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/aboutus" element={<AboutusPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signin" element={<SignUp />} />
        <Route path="/pages/services" element={<OurServices />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/pages/ourchefs" element={<OurChef />} />
        <Route path="/pages/contactus" element={<Contactus />} />
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </div>
  );
}
