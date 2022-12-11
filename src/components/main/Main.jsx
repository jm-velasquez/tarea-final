import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../header/Header";
import Contact from "../../views/Contact/Contact";
import Art from "../../views/Art/Art.1";
import Notfound from "../../views/404/Notfound";
import Home from "../../views/Home/Home";

import Footer from "../footer/Footer";

export default function Main() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/contacto" element={<Contact />} />
        <Route path="/art" element={<Art />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
