import { useState } from "react";
import Blog from "../components/Blog";
import Header from "../components/Header";
import Navbar from "../components/Navbar";


  //Get Method
  let entradas;

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((data) => entradas = data)
  .then((data)=>console.log(data));

function HomePage() {
  return (
    <div>
      <Navbar />

      <Header title="Al cuidado de tu salud" />

      <Blog content={entradas} />
    </div>
  );
}

export default HomePage;
