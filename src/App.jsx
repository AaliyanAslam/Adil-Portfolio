import "./App.css";
import React from "react";
import { NavbarSec } from "./components/NavbarSec";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";
import { Portfolio } from "./components/Portfolio";
import { Routes, Route } from "react-router-dom";

export default function App() {
  let address =
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?cs=srgb&dl=pexels-mikebirdy-170811.jpg&fm=jpg";
  const portfolioData = [
    {
      title: "Miss Symetria - Harmonie w życiu, pokoju",
      description: "A personal blog showcasing harmony in life and peace.",
      image: address, // Replace with actual image path
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Miss Symetria - Harmonie w życiu, pokoju",
      description: "A personal blog showcasing harmony in life and peace.",
      image: address, // Replace with actual image path
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Miss Symetria - Harmonie w życiu, pokoju",
      description: "A personal blog showcasing harmony in life and peace.",
      image: address, // Replace with actual image path
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Making Brands Stand Out",
      description: "Creative website design for brand enhancement.",
      image: address, // Replace with actual image path
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Miss Symetria - Harmonie w życiu, pokoju",
      description: "A personal blog showcasing harmony in life and peace.",
      image: address, // Replace with actual image path
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Making Brands Stand Out",
      description: "Creative website design for brand enhancement.",
      image: address, // Replace with actual image path
      tech: ["HTML", "CSS", "JS"],
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
