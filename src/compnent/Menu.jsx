import React from "react";
import logo from "../images/profuborka.png";

function menu() {
  return (
    <nav className="nav">
      <div className="continer">
        <div className="logo-box">
          <img src={logo} alt="" />
        </div>
        <div className="menu">
          <ul>
            <a href="#">
              <li>Глввная</li>
            </a>
            <a href=".usluga">
              <li>Наши услуги</li>
            </a>
            <a href="#">
              <li>Акции</li>
            </a>
            <a href="#">
              <li>Как мы работаем</li>
            </a>
          </ul>
        </div>
        <div className="menu-thing">
          <p className="num">
            <a href="#">+998 (71) 200-03-28</a>
          </p>
          <button className="btn">Заказать звонок</button>
        </div>
      </div>
    </nav>
  );
}

export default menu;
