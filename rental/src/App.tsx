import "./App.css";
import React from "react";
import TargeMrental from "./components/targetMrental/targetMrental";
import PopularCar from "./components/PopularCarPage/PopularCar";
import FailedToLoadItems from "./components/carCard/failedToLoadItems";
import { carTypeObject } from "./components/types/carCardTypes";
import Condition from "./components/conditions/condition";
import AboutUs from "./components/boutUs/aboutUs";
import { useEffect, useState } from "react";
import Park from "./components/parkCar/Park";
import Footer from "./components/Footer/footer";

const App: React.FC = () => {
  const [data, setData] = useState<carTypeObject[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async function () {
      try {
        const data = await (await fetch("http://localhost:3000/cars")).json();
        setData(data);
      } catch (err) {
        setError(err as Error);
      }
    })();
  }, []);

  if (error) {
    return <FailedToLoadItems error={error} />;
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1440px",
        margin: "0 auto",
        backgroundColor: "white",
      }} //do not do it like this better declare a class :)
    >
      <TargeMrental />
      <PopularCar data={data} />
      <Condition />
      <Park data={data}></Park>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </div>
  );
};

export default App;
