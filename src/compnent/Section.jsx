import React, {useEffect} from "react";
import boxOne from "../images/image 32.png"
import boxTwo from "../images/image 33.png"
import boxThree from "../images/image 34.png"
import boxFour from "../images/image 35.png"
import Aos from "aos";
import "aos/dist/aos.css";




function section (){
  
    Aos.init({duration:2000});
  
  
  return(
    <section className="sectionOne">
      <div className="continer">
      <div className="section-title">
      <h2>Наши услуги</h2>
    </div>

    <div itemID="usluga" className="sectionBoxes">

        <div data-aos="flip-up" className="boxOne">
          <div className="imgBox">
          <img src={boxOne} alt="image" />
          </div>
          <h3>ОЧИСТКА ВСЕХ ПОВЕРХНОСТЕЙ</h3>
          <p>От пыли и строительного мусора и пятен. Дом будет обеспылен и очищен без повреждения интерьера и экстерьера.</p>
        </div>

        <div data-aos="flip-up"  className="boxTwo">
          <div className="imgBox">
          <img src={boxTwo} alt="image" />
          </div>
          <h3>МОЙКА ЛЮСТР НА ВЫСОТЕ</h3>
          <p>Одна из сложных специализированных работ.</p>
        </div>  

        <div data-aos="flip-up"  className="boxThree">
          <div className="imgBox">
          <img src={boxThree} alt="image" />
          </div>
          <h3>УБОРКА ДВОРА ДОМА</h3>
          <p>Все, что вы видите во дворе будет чистым. При вашем желании можем нанести защитные средства.</p>
        </div>  

        <div data-aos="flip-up" className="boxFour">
          <div className="imgBox">
          <img src={boxFour} alt="image" />
          </div>
          <h3>ОТ А ДО Я</h3>
          <p>Уборку после строительства проводим от А до Я. Не найдете такого места , которого не коснулась рука клинера.</p>
        </div>  


      
    </div>
    
      </div>
    </section>
  )
}

export default section;