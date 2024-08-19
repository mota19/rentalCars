import { carTypeObject } from "../types/carCardTypes";
import CarCard from "../carCard/carCard";
import style from "./park.module.css";

const Park: React.FC<{ data: carTypeObject[] }> = ({ data }) => {
  return (
    <>
      <h2 className={style.h2}>Парк</h2>
      <h2 className={style.headearsa}>Економ клас</h2>
      <CarCard data={data} carClass={"econom"} />
      <h2 className={style.headearsa}>Середній клас</h2>
      <CarCard data={data} carClass={"mid"} />
      <h2 className={style.headearsa}>Бізнес клас</h2>
      <CarCard data={data} carClass={"business"} />
      <h2 className={style.headearsa}>Преміум клас</h2>
      <CarCard data={data} carClass={"premium"} />
    </>
  );
};

export default Park;
