import React from "react";

function SectionFive() {
  return (
    <section className="SectionFive">
      <div className="sectionTitle">
        <h2>Как мы работаем?</h2>
      </div>

     <div className="continer">
     
     <div className="sectionFive-text">
     <div className="box">
       <p className="num">1</p>
       <p className="text">
         Вы оставляете заявку на сайте или звоните по телефону
         <br />
         <a href="#">+998 71 200 03 28</a>
       </p>
     </div>

     <div className="box2">
       <p className="num">2</p>
       <p className="text">
         К Вам на объект приезжает
         менеджер и проводит точную стоимость работ
       </p>
     </div>

     <div className="box3">
       <p className="num">3</p>
       <p className="text">
       В назначенное время бригада
       производит запланированные
       работы
       </p>
     </div>

     <div className="box4">
       <p className="num">4</p>
       <p className="text">
       Бригадир проверяет объект и
       сдает Вам на 100% убранное
       помещение
       </p>
     </div>
   </div>
   
     </div>
    </section>
  );
}

export default SectionFive;
