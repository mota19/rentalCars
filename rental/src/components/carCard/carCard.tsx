import { useEffect, useState } from "react";
import ItemCar from "./itemCar";

export interface carTypeObject {
  id: string;
  classCar: string;
  price: string[];
  weight: number;
  name: string;
  engineType: string;
  mileagePer100Km: number;
  image: string;
  transmission: "automatic" | "manual";
  engineCapacity: number;
}

const CarCard: React.FC = () => {
  const [data, setData] = useState<carTypeObject[] | undefined>(undefined);

  useEffect(() => {
    (async function () {
      const data = await (await fetch("http://localhost:3000/cars")).json();
      setData(data);
    })();
  }, []);

  return (
    <div>
      {data && data.length > 0
        ? data.map((item) => {
            return <ItemCar key={item.id} carObject={item} />;
          })
        : "fsdf"}
    </div>
  );
};

export default CarCard;
