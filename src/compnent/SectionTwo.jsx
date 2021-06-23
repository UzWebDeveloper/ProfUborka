import React from "react";
import card1 from "../images/profit-item-icon-1.svg";
import card2 from "../images/profit-item-icon-2.svg";
import card3 from "../images/profit-item-icon-3.svg";
import cardHover1 from "../images/profit-item-hover-icon-1.svg";
import cardHover2 from "../images/profit-item-hover-icon-2.svg";
import cardHover3 from "../images/profit-item-hover-icon-3.svg";

function SectionTwo (){
  return(
    <section className = "sectionTwo">

     <div className="continer">
     <div className="title">
     <div className = " section-title">
        <h2>В чем выгода обращения в PROFUBORKA?</h2>
      </div>

      <div className="section-subtitle">
      <p>Profuborka.uz - флагман точности, дисциплины, ответственности, доверия. За счет этого вы получаете:</p>
      </div>
     </div>
    
    <div className="cards">
      
      <div className="card cardOne">
        <img className="card1" src={card1} alt="" />
        <img className="cardHover1" src= {cardHover1} alt="" />
        <p>Работу начинаем и заканчиваем
        в строго оговоренные сроки</p>
      </div>

      <div className="card cardTwo">
        <img className="card2" src={card2} alt="" />
        <img className="cardHover2" src= {cardHover2} alt="" />
        <p>Делаем тщательную и аккуратную уборку с вниманием к деталям</p>
      </div>

      <div className="card cardThree">
        <img className="card3" src={card3} alt="" />
        <img className="cardHover3" src= {cardHover3} alt="" />
        <p>Бесплатная влажная уборка перед заселением.</p>
      </div>
    </div>

     </div>
    </section>
  )
}

export default SectionTwo;