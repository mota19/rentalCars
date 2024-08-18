import { useEffect, useState } from "react";
import ItemCar from "./itemCar";
import FailedToLoadItems from "./failedToLoadItems";
import { carTypeObject } from "../types/carCardTypes";
import Loading from "./loading";
import styles from "./carCard.module.css";

const CarCard: React.FC = () => {
  const [data, setData] = useState<carTypeObject[] | undefined>(undefined);
  const [error, setError] = useState<Error | null>(null);
  const [carClass, setCarClass] = useState<string>("econom");

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

  // const firstThreeItems = data && data.length > 0 ? data.slice(0, 3) : [];

  function handleClassCarClick(classCar: string): void {
    setCarClass(classCar);
  }

  return (
    <>
      <button onClick={() => handleClassCarClick("econom")}>економ</button>
      <button onClick={() => handleClassCarClick("mid")}>середній</button>
      <button onClick={() => handleClassCarClick("business")}>бізнес</button>
      <button onClick={() => handleClassCarClick("premium")}>преміум</button>
      <div className={styles.main}>
        {data && data.length > 0 ? (
          data
            .filter((it) => {
              return it.classCar === carClass;
            })
            .map((item) => {
              return <ItemCar key={item.id} carObject={item} />;
            })
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default CarCard;
