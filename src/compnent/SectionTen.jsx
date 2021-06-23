import React from "react";
import lefto from "../images/lefto.svg";
import lefto2 from "../images/lefto2.svg";
import lena from "../images/Лена 1.png"

function SectionTen() {
  return (
    <section className="SectionTen">
      <div className="istorya">
        <div className="istoryaText">
          <div className="textTop">
            <img src={lefto} />
            <p>
              Вы пытаетесь навести чистоту в вашем красивом новом доме, который
              заканчиваете строить, но уже понимаете, что выбрать клининговую
              компанию, просто сравнивая цены, слишком рискованно, так как у вас
              дорогой дизайн!
            </p>
          </div>

          <div className="textBottom">
            <p>
              Тогда вам стоит узнать о возможности клининга, как не просто
              навести идеальную чистоту, но и подчеркнуть достоинства вашего
              интерьера. И наконец-то въехать всей семьей!
            </p>
            <img src={lefto2} />
          </div>

          <p className="txt">Откуда я все это знаю?</p>
        </div>
        <div className="istoryaBottom">
          <div className="bottomText">
            <p>
              Приятно познакомиться, меня зовут Елена, я владелица клининговой
              компании "ПрофУборка".
            </p>
            <p>И я хочу рассказать историю нашего клиента.</p>
            <button className="btn">История</button>
          </div>

          <div className="bottomImg">
          <img src={lena}/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTen;
