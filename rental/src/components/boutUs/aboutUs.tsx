import style from "./aboutUs.module.css";

const AboutUs: React.FC = () => {
  return (
    <section style={{ margin: "50px" }}>
      <h2 className={style.h2}>Про нас</h2>
      <div className={style.container}>
        <div>
          <h3>7 РОКІВ НА РИНКУ УКРАЇНИ</h3>
          <p>
            Працюємо на ринку України вже понад 7 років та маємо значний досвід
            у галузі подобової оренди автомобілів
          </p>
        </div>
        <div>
          <h3>ВЕЛИКИЙ ВИБІР АВТОМОБІЛІВ</h3>
          <p>
            Наш парк складається повністю застрахованих автомобілів, що
            регулярно проходять технічні перевірки та обслуговування
          </p>
        </div>
        <img
          className={style.img}
          alt="Салон мермедесу"
          src="https://avatars.mds.yandex.net/get-vertis-journal/4220003/mercedes-amg-gt-coupe-2023_5.jpg_1692446195832/orig"
        ></img>
      </div>
    </section>
  );
};

export default AboutUs;
