import React from "react";
import farme from "../images/Frame.png";


function SectionEight() {
  return (
    <section className="SectionEight">
      <div className="continer">
      <div className="title">
      <h2>Видеогалерея</h2>
    </div>

    <div className="videoBoxes">
      <div className="box1 box">
        <img src={farme}/>
      </div>

      <div className="box2 box">
        <img src={farme}/>
      </div>

      <div className="box3 box">
        <img src={farme}/>
      </div>

      <div className="box4 box">
        <img src={farme}/>
      </div>

      <div className="box5 box">
        <img src={farme}/>
      </div>

      <div className="box6 box">
        <img src={farme}/>
      </div>
    </div>

    <div className="moreBtn">
      <button>Еще больше видео у нас в инстаграме</button>
    </div>
      </div>
    </section>
  );
}

export default SectionEight;
