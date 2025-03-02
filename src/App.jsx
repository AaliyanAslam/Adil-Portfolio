import "./App.css";
import React from "react";
import { NavbarSec } from "./components/NavbarSec";
import { Services } from "./components/Services";
import {Skills} from "./components/Skills";
export default function App() {
  return (
    <>
      <NavbarSec />
      <Services />
      <Skills />
     

      
    </>
  );
}
