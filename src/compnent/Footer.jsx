import React from "react";
import map from "../images/map.png";
import tel from "../images/telephone.png";
import gmail from "../images/gmail.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import telegram from "../images/telegram.svg";

function Footer() {
  return (
    <footer className="Footer">

      <div className="continer">
        <div className="mapBox">
          <img src={map} />
        </div>

        <div className="contactBox">
          <div className="boxTitle">
            <h2>У вас остались вопросы?</h2>
            <p>Задайте их прямо сейчас</p>
          </div>

          <div className="contact">
            <div className="telImg"><img src={tel} /></div>
            <div className="telNum">
              <p><a href="#">+998 (90) 329 03 28</a></p>
              <p><a href="#">+998 (90) 187 - 03 - 28</a></p>
            </div>
          </div>
          <div className="contact">
            <img src={gmail} />
            <a href="#">asiaclean@mail.ru</a>
          </div>
          <div className="contact">
            <img src={facebook} />
            <a href="#">www.facebook.com/profuborka.uz</a>
          </div>
          <div className="contact">
            <img src={instagram} />
            <a href="#">profuborka_uz</a>
          </div>
          <div className="contact">
            <img src={telegram} />
            <a href="#">@profuborka_tashkent</a>
          </div>
          <button className="btn">Оставить заявку</button>
        </div>
      </div>
      
    </footer>
  );
}

export default Footer;
