import { carTypeObject } from "../types/carCardTypes";
import style from "./PopularCar.module.css";
import { useState } from "react";
import CarCard from "../carCard/carCard";

const PopularCar: React.FC<{ data: carTypeObject[] }> = ({ data }) => {
  const [carClass, setCarClass] = useState<string>("econom");

  function handleClassCarClick(classCar: string): void {
    setCarClass(classCar);
  }

  return (
    <section>
      <h2 className={style.h1}>Популярні авто</h2>
      <div className={style.buttonBox}>
        <button onClick={() => handleClassCarClick("econom")}>
          економ клас
        </button>
        <button onClick={() => handleClassCarClick("mid")}>
          середній клас
        </button>
        <button onClick={() => handleClassCarClick("business")}>
          бізнес клас
        </button>
        <button onClick={() => handleClassCarClick("premium")}>
          преміум клас
        </button>
      </div>
      <CarCard data={data} carClass={carClass}></CarCard>
    </section>
  );
};

export default PopularCar;
