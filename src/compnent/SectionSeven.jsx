import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Pagination } from "swiper/core";
import workPosle from "../images/work-posle-1.jpg";
import workDo from "../images/work-do-1.jpg";
import workPosle1 from "../images/1posle.png";
import workDo1 from "../images/1do.png";
import workPosle3 from "../images/3posle.png";
import workDo3 from "../images/3do.png";
import workPosle4 from "../images/4posle.png";
import workDo4 from "../images/4do.png";
import workPosle5 from "../images/5posle.png";
import workDo5 from "../images/5do.png";
import workPosle6 from "../images/6posle.png";
import workDo6 from "../images/6do.png";


SwiperCore.use([Pagination]);

function SectionSeven() {
  return (
    <section className="SectionSeven">
      <div className="continer">
        <div className="title">
          <h2>Выполненные объекты</h2>
        </div>
        <div className="cards">
          <Swiper pagination={true} className="mySwiper">
          
            <SwiperSlide className="box">
            <img src= {workPosle}/>
            <img src= {workDo}/>
            </SwiperSlide>
            <SwiperSlide className="box">
            <img src= {workPosle1}/>
            <img src= {workDo1}/>
            </SwiperSlide>
            <SwiperSlide className="box">
            <img src= {workPosle3}/>
            <img src= {workDo3}/>
            </SwiperSlide>
            <SwiperSlide className="box">
            <img src= {workPosle4}/>
            <img src= {workDo4}/>
            </SwiperSlide>
            <SwiperSlide className="box">
            <img src= {workPosle5}/>
            <img src= {workDo5}/>
            </SwiperSlide>
            <SwiperSlide className="box">
            <img src= {workPosle6}/>
            <img src= {workDo6}/>
            </SwiperSlide>
            
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default SectionSeven;
