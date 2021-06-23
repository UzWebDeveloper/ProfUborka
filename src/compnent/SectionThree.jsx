import React from "react";
import boxOne from "../images/image 43.png";
import boxTwo from "../images/image 41.png";
import boxThree from "../images/image 42.png";
import boxFour from "../images/image 8.png";
import boxFive from "../images/image 36.png";


function SectionThree (){
  return(
    <section className = "sectionThree">
      <div className="continer">
      <div className="title-box">
      <h2>Чистка твердых покрытий:</h2>
    </div>

    <div className="boxes">
      <div className="boxOne">
        <div className="imgBox">
          <img src={boxOne} alt="image"/>
        </div>

        <h2>ТРАВЕРТИН</h2>
        <p>Чистка травертина + защитное средство</p>

      </div>

      <div className="boxTwo">
        <div className="imgBox">
          <img src={boxTwo} alt="image"/>
        </div>

        <h2>ГРАНИТ</h2>
        <p>Чистка гранита по спец. технологии + защитная полироль</p>

      </div>

      <div className="boxThree">
        <div className="imgBox">
          <img src={boxThree} alt="image"/>
        </div>

        <h2>БРУСЧАТКА</h2>
        <p>Чистка + нанесение уникального спец. средства</p>

      </div>

      <div className="boxFour">
        <div className="imgBox">
          <img src={boxFour} alt="image"/>
        </div>

        <h2>КИРПИЧ</h2>
        <p>Чистка кирпича по спец. технологии + гидрофобизатор</p>

      </div>

      <div className="boxFive">
        <div className="imgBox">
          <img src={boxFive} alt="image"/>
        </div>

        <h2>КАФЕЛЬ</h2>
        <p>Чистка пола от любых загрязнений</p>

      </div>
    </div>

      </div>
    </section>
  )
}

export default SectionThree;