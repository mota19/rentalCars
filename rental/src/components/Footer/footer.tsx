import style from "../Header/header.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={style.heder} style={{ backgroundColor: "#1c1c1c" }}>
      <p
        className={style.targeMrental}
        style={{ color: "#c59900", fontSize: "24px", fontWeight: "bold" }}
      >
        target<span style={{ color: "yellow" }}>M</span>rental
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div className={style.list} style={{ display: "flex", gap: "10px" }}>
          <button>Підтримка +380674470151</button>
          <button>TargetMrental@gmail.com</button>
        </div>
        <div>
          <button className={style.button}>Орендувати</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
