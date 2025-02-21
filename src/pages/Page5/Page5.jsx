import React from 'react';
import Header from '../../components/Header/Header';
import Hero5 from '../../components/Hero5/Hero5';
import News from '../../components/News/News';
import Footer from '../../components/Footer/Footer';
import { Helmet } from 'react-helmet-async';

const Page5 = () => {
  return (
    <div>
      {/* Динамические метатеги */}
      <Helmet>
        <title>О компании | Домус Фригус</title>
        <meta
          name="description"
          content="Узнайте больше о нашей компании Домус Фригус. Поставляем холодильное оборудование по всей Украине."
        />
        <meta
          name="keywords"
          content="холодильное оборудование, компрессоры, теплообменное оборудование, воздухоохладитель, конденсатор, ресивер, запорный вентиль, Danfoss, соленоидный вентиль, блок управления, холодильная централь, конденсаторы Днепропетровск, компрессор Днепропетровск, воздухоохладители Днепропетровск, Bitzer Днепропетровск, холодильное оборудование Днепропетровск, холодильная камера, шокфростер, компрессоры в Украине, конденсаторы в Украине, холодильное промышленное оборудование, фреоновое холодильное оборудование, Bitzer, Guentner, Basetec, Danfoss, Luvata, Lloyd, MKM, Balexmetal, Paneltech, IBP, Zahna, Denaline, Ziehl-Abegg, WTK, Wieguang, Becool, Bristol, Klimaline, Klimax, MTH, EMS, Компрессоры (полугерметичные поршневые, полугерметичные винтовые, компактные винновые, открытые винтовые и поршневые) Bitzer, Danfoss, Bristol, Конденсаторы Luvata (SPR), Lloyd, Guentner, Bitzer, WTK, Компрессор-конденсаторные агрегаты Bitzer, Danfoss, Bristol, Испарители Guentner, Basetec, Аммиачные испарители Guentner, Воздухоохладители Guentner, Сухии охладители (драйкулеры) Guentner, Кожухотрубные испарители WTK, Кожухотрубные конденсаторы WTK, Bitzer, Пластинчатые теплообменники WTK, Теплообменники WTK, Guentner, Ресиверы Denaline, Guentner, Bitzer, Becool, Вентиляторы (осевые вентиляторы) Ziehl-Abegg, Wieguang, Сендвич-панель (сендвич) Balexmetal (Balex), Paneltech, EMS, Холодильные двери, двери для холодильных камер MTH, Paneltech, Холодильная автоматика Danfoss, Медная труба MKM, Фитинги (колена, углы переходы, отводы, муфты и т.д.) IBP, Zahna, Шаровые вентили Klimaline (Klimax), Запорные вентили Klimaline (Klimax), Виброгасители Klimaline (Klimax)"
        />
        <meta property="og:title" content="О компании | Домус Фригус" />
        <meta
          property="og:description"
          content="Узнайте больше о нашей компании Домус Фригус."
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <Hero5 />
      <News />
      <Footer />
    </div>
  );
};

export default Page5;
