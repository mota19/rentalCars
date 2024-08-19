import style from "./condition.module.css";

const Condition: React.FC = () => {
  return (
    <section style={{ margin: "50px 50px 0px 50px" }}>
      <h2 className={style.h1}>умови</h2>
      <div className={style.mainSection}>
        <ul className={style.ul}>
          <li>Вік від 21-го року</li>
          <li>
            Застава на час користування залежить від класу авто. Сума від 7000
            грн
          </li>
          <li>Стаж водіння від 2-х років</li>
          <li>Мінімальний термін оренди - 1 доба</li>
        </ul>
        <img
          className={style.img}
          alt="BMW M8"
          src="https://images7.alphacoders.com/104/thumb-1920-1045297.jpg"
        ></img>
        <div className={style.ourAdvantages}>
          <h3 className={style.h3}>Наші переваги</h3>
          <ul className={style.ulAdvantages}>
            <div>
              <li>01</li>
              <li>Авто повністю застрахованні</li>
            </div>
            <div>
              <li>02</li>
              <li>Ми доставляємо авто за адресою протягом 40 хвилин</li>
            </div>
            <div>
              <li>03</li>
              <li>Цілодобова онлайн-підтримка</li>
            </div>
            <div>
              <li>04</li>
              <li>Видача авто в чистому вигляді та з повним баком</li>
            </div>
            <div>
              <li>05</li>
              <li>Допомога в дорозі</li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Condition;
