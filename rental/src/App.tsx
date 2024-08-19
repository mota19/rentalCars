import "./App.css";
import React from "react";
import CarCard from "./components/carCard/carCard";
import Header from "./components/Header/header";

const App: React.FC = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
      }} //do not do it like this better declare a class :)
    >
      <Header></Header>
      <CarCard />
    </div>
  );
};

export default App;
