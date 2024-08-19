import style from "./targetMrental.module.css";
import Header from "../Header/header";

const TargeMrental: React.FC = () => {
  return (
    <section style={{ backgroundColor: "#1c1c1c", height: "800px" }}>
      <Header />
      <h1 className={style.h1}>подобова оренда автомобілів у львові</h1>
      <div className={style.container}>
        <ul className={style.list}>
          <li>Великий вибір автомобілів</li>
          <li>Повне страхування(КАСКО,ОСАГО)</li>
          <li>Доставка за адресою</li>
          <li>Передача авто до 8 хвилин</li>
          <li>Цілодобова підтримка 24/7</li>
        </ul>
        <button className={style.button}>ОРЕНДУВАТИ З ЗНИЖКОЮ 15%</button>
        <img
          className={style.img}
          alt="Класний автомобіль"
          src="https://upstatebusinessjournal.com/wp-content/uploads/sites/2/2024/01/Tesla-Model-S70.jpg"
        ></img>
      </div>
    </section>
  );
};

export default TargeMrental;
