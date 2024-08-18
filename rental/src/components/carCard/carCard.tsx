import { useEffect, useState } from "react";
import ItemCar from "./itemCar";
import FailedToLoadItems from "./failedToLoadItems";
import { carTypeObject } from "../types/carCardTypes";
import Loading from "./loading";

const CarCard: React.FC = () => {
  const [data, setData] = useState<carTypeObject[] | undefined>(undefined);
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
    <div>
      {data && data.length > 0 ? (
        data.map((item) => {
          return <ItemCar key={item.id} carObject={item} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default CarCard;
