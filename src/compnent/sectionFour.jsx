import React from "react";
import image from "../images/Prof.png"


function SectionFour (){
  return(
    <section className = "SectionFour">
    <div className="continer">
    <div className="boxes">
    <div className="boxLeft">
      <h2 className="boxLeft-title">Гарантия!</h2>

      <p className="boxLeft-subtitle">Мы реальная, твердая компания и мы не боимся давать гарантии</p>
      <p className="boxLeft-subtitle1">Мы выполним работу в строго оговоренные сроки.</p>

      <button className = "btn">Позвонить</button>
    </div>

    <div className="boxRight">
      <img src={image} alt="" />
    </div>
  </div>
  
    </div>
    </section>
  )
}

export default SectionFour;