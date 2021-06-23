import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import arrowright from "../images/arrowright.svg";
import arrowleft from "../images/arrowleft.svg";
import questionIcon from "../images/question-icon.png";

SwiperCore.use([Pagination, Navigation]);

function SectionSix() {
  return (
    <section className="SectionSix">
      <div className="continer">
        <div className="boxes">
          <div className="boxLeft">
            <div className="boxTop">
              <div className="topLeft">
                <h2>5 проблем</h2>
                <p>с которыми сталкиваются 80% заказчиков клининговых услуг</p>
              </div>

              <div className="topRight"> </div>
            </div>

            <div className="boxBottom">
              <Swiper
                pagination={{
                  type: "fraction",
                }}
                navigation={true}
                className="mySwiper"
              >
                <SwiperSlide className="cards">
                  <div className="card">
                    <p className="txt">ПРОБЛЕМА</p>
                    <p className="title">Медленное обслуживание?</p>
                    <p className="subtitle">
                      Не можете дозвониться до клининговой компании с первого
                      раза? Вас не могут быстро проконсультировать и заставляют
                      долго ждать?
                    </p>
                  </div>

                  <div className="card">
                    <p className="txt">Решение</p>
                    <p className="title">Быстрое обслуживание.</p>
                    <p className="subtitle">
                      Позвонив нам, Вы сэкономите драгоценное время, получив
                      быстрое обслуживание,бесплатную консультацию вкратчайший
                      срок и оперативную организацию бригады под Ваш заказ.
                    </p>
                  </div>
                </SwiperSlide>

                <SwiperSlide className="cards">
                  <div className="card">
                    <p className="txt">ПРОБЛЕМА</p>
                    <p className="title">Плохое качество уборки?</p>
                    <p className="subtitle">
                      Вам оказали услугу по уборке, но качество было на низком
                      уровне? Остались разводы на стекле и прочие недочеты?
                    </p>
                  </div>

                  <div className="card">
                    <p className="txt">Решение</p>
                    <p className="title">Высокое качество услуг.</p>
                    <p className="subtitle">
                      Бригада нашей компании выполняет работу максимально
                      качественно по нормам САНПИН, с большим вниманием к
                      деталям.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cards">
                  <div className="card">
                    <p className="txt">ПРОБЛЕМА</p>
                    <p className="title">Не понятный персонал?</p>
                    <p className="subtitle">
                      Персонал выглядит неопрятно или плохо понимает, что и как
                      требуется убрать, практически не имеет опыта уборки?
                    </p>
                  </div>

                  <div className="card">
                    <p className="txt">Решение</p>
                    <p className="title">Персонал в штате.</p>
                    <p className="subtitle">
                      Мы тщательно проводим подбор персонала, который четко
                      знает свои обязанности. Каждый клинер проходит обучение на
                      современной обучающей платформе. Все одеты в униформу с
                      символикой фирмы.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cards">
                  <div className="card">
                    <p className="txt">ПРОБЛЕМА</p>
                    <p className="title">Нет оборудования?</p>
                    <p className="subtitle">
                      Бригада приезжает на объект без профессионального
                      оборудования и спец. средств? В конечном итоге такая
                      работа влияет на качество и увеличивает время.
                    </p>
                  </div>

                  <div className="card">
                    <p className="txt">Решение</p>
                    <p className="title">Быстрое обслуживание.</p>
                    <p className="subtitle">
                      Бригада укомплектована достаточным количеством
                      профессионального оборудования, начиная от специальной
                      химии и различных профессиональных салфеток до специальных
                      пылесосов и роторных машин.
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="cards">
                  <div className="card">
                    <p className="txt">ПРОБЛЕМА</p>
                    <p className="title">Испортили поверхность?</p>
                    <p className="subtitle">
                      В процессе уборки выявилось, что поверхность испорчена.
                    </p>
                  </div>

                  <div className="card">
                    <p className="txt">Решение</p>
                    <p className="title">Материальная ответственность</p>
                    <p className="subtitle">
                      Все работы выполняются бережно, с профессиональным
                      подходом и ответственностью. В результате вы будете
                      спокойны. В случае претензии мы возместим ущерб.
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="boxRight">
            <p>
              Не нашли ответ на свой вопрос? Позвоните или напишите нам, мы всё
              расскажем
            </p>

            <a>+998 90 329 03 28</a>

            <button className="btn">Позвонить</button>
            <div className="questionIcon">
              <img src={questionIcon} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
