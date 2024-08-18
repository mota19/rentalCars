import styles from "./carCard.module.css";

const PriceItem: React.FC<{ price: string }> = (props) => {
  return (
    <div className={styles.price}>
      <p style={{ fontWeight: "bold" }}>{props.price} UAH</p>
      <p className={styles.price}>10 діб</p>
    </div>
  );
};

export default PriceItem;
