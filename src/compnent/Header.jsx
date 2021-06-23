import React from "react";
import image from "../images/image-boxRight.png";
import Group from "../images/Group 21.png";
function Header (){
  return(
    <header className="header">
     <div className="continer">
     <div className="box-left">
     <h1 className="title">
     ПОСЛЕСТРОИТЕЛЬНАЯ
     <span> УБОРКА ЧАСТНЫХ </span>
     ДОМОВ В ТАШКЕНТЕ
     </h1>
     <p className="subtitle">
     Profuborka.uz - флагман точности, дисциплины, ответственности, доверия.
     </p>

     <button className="btn">Заказать уборку</button>
     <img className = "groupImg" src={Group} alt="" />
   </div>

   <div className="box-right">
     <div className="img-box">
       <img src={image} alt="image" />
     </div>
   </div>
   
     </div>
    </header>
  )
}

export default Header;