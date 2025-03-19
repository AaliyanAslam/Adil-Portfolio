
import React from "react";
import { NavbarSec } from "./components/NavbarSec";
import { Services } from "./components/Services";
import MyServices from "./pages/MyServices";
import  Technology  from "./pages/Technology";
import { Portfolio } from "./components/Portfolio";
import { Routes, Route } from "react-router-dom";
import Portfolios from "./pages/Portfolios";
import Erd from "/src/assets/erd.png";
import Contact from "./pages/Contact";

export default function App() {
  let address =
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg";
  const portfolioData = [
    {
      title: "Interactive ERD Viewer",
      description: "A useful and interactive ERD viewer to visualize database relationships effectively.",
      image: Erd,
      tech: ["HTML", "CSS", "JS"],
      link : "https://adilaslam1807.github.io/ERD-viewer/"
    },
  ];
  return (
    <>
      <div>
      <Routes>
        <Route path="/" element={<Portfolios />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/expertise" element={<MyServices />} />
      </Routes>
    </div>
    </>
  );
}
