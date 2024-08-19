import ItemCar from "./itemCar";
import { carTypeObject } from "../types/carCardTypes";
import Loading from "./loading";
import styles from "./carCard.module.css";

const CarCard: React.FC<{ data: carTypeObject[]; carClass: string }> = ({
  data,
  carClass,
}) => {
  return (
    <>
      <div className={styles.main}>
        {data && data.length > 0 ? (
          data
            .filter((it) => {
              return it.classCar === carClass;
            })
            .slice(0, 3)
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
