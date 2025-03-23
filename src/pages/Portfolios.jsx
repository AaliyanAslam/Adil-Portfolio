
import React from "react";
import { NavbarSec } from "../components/NavbarSec";
import { Services } from "../components/Services";
import { Skills } from "../components/Skills";
import { Portfolio } from "../components/Portfolio";
import { Routes, Route } from "react-router-dom";
import Erd from "/src/assets/erd.png";
import vidrec from "/src/assets/vidrec.png";

export default function Portfolios() {
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
    {
      title: "Web-Based Video Recorder with Download Feature",
      description: "A simple yet powerful web-based video recording tool that allows users to record videos using their webcam and download them instantly.",
      image: vidrec,
      tech: ["HTML", "CSS", "JS"],
      link : "https://adilaslam1807.github.io/screen-record-with-webcam/"
    },
  ];
  return (
    <>
      <NavbarSec />
      <Services />
      <Skills />
      <Portfolio projects={portfolioData} />
    </>
  );
}
