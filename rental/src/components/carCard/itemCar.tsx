import { carTypeObject } from "./carCard";

const ItemCar: React.FC<{ carObject: carTypeObject }> = ({ carObject }) => {
  const {
    classCar,
    price,
    weight,
    name,
    engineType,
    mileagePer100Km,
    image,
    transmission,
    engineCapacity,
  } = carObject;

  return (
    <div>
      <h2>{name}</h2>
      <p>Class: {classCar}</p>
      <p>Price: {price.join(", ")}</p>
      <p>Weight: {weight}</p>
      <p>Engine Type: {engineType}</p>
      <p>Mileage per 100 km: {mileagePer100Km}</p>
      <p>Transmission: {transmission}</p>
      <p>Engine Capacity: {engineCapacity} L</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default ItemCar;
