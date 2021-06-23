import React from "react";
import stars from "../images/stars.svg";
import imgOne from "../images/image 2.png";
import imgTwo from "../images/image 1.png";
import imgThree from "../images/image 3.png";
import clock from "../images/Vector.png";

function SectionNine() {
  return (
    <section className="SectionNine">
      <div className="continer">
      <div className="title">
      <h2>Отзывы о нас</h2>
    </div>

    <div className="continer">
    <div className="commentCards">
    <div className="card">
      <div className="cardTitle">
        <img src={imgOne} />
        <div className="titleText">
          <h3>Анвар Муминов</h3>
          <img src={stars} />
        </div>
      </div>

      <div className="cardText">
        <p>
          После каждого сезона дождей и осадок стоял вопрос, менять кафель
          во дворе или вызвать профессионалов по чистке? Естественно, менять
          кафель очень накладно. Вызвал специалистов. Остался довольным
          качеством и стоимостью работ. К свадьбе сына мой двор блестел.
        </p>

        <div className="cardTime">
          <img src={clock} />
          <span>15 сентябрь 2020</span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="cardTitle">
        <img src={imgTwo} />
        <div className="titleText">
          <h3>Тимур Тимурович</h3>
          <img src={stars} />
        </div>
      </div>

      <div className="cardText">
        <p>
          Ваш номер мы взяли у друзей. Вы убирали у них двор в стороне
          САМПИ. Мы не приглашали других, потому что знали , что вы сможете
          это сделать в срок. Мы могли бы пригнать сюда 50 человек с базара.
          И они не сделали бы это так , как сделали это вы. У вас для окон
          одна химия, для камня другая химия. Короче, вы знаете , что
          делаете. Убрались чисто. Спасибо. Рекомендую тем, кто закончил
          ремонт!
        </p>

        <div className="cardTime">
          <img src={clock} />
          <span>
          22 июль 2020</span>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="cardTitle">
        <img src={imgThree} />
        <div className="titleText">
          <h3>Ойбек</h3>
          <img src={stars} />
        </div>
      </div>

      <div className="cardText">
        <p>
          По рекомендации подруги пригласила компанию Профуборка. Мне надо
          было помыть люстру на лестнице. Она висит в таком неудобном месте.
          Для них это оказалось не проблемой. Рекомендую!
        </p>

        <div className="cardTime">
          <img src={clock} />
          <span>
          10 октябрь 2020</span>
        </div>
      </div>
    </div>
  </div>
  
    </div>
    
      </div>
    </section>
  );
}

export default SectionNine;
