import style from "./header.module.css";

const Header: React.FC = () => {
  return (
    //краще писати використовючи лише className і в крайньмо випадку використовувати style,
    //або використовувати tailwind css або інший фреймворк
    <div className={style.heder}>
      <p
        className={style.targeMrental}
        style={{ color: "#c59900", fontSize: "24px", fontWeight: "bold" }}
      >
        target<span style={{ color: "yellow" }}>M</span>rental
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div className={style.list} style={{ display: "flex", gap: "10px" }}>
          <button>Автопарк</button>
          <button>Про нас</button>
          <button>Умови прокату</button>
        </div>
        <div>
          <button className={style.button}>Орендувати</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
